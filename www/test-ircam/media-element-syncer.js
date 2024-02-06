/*
    MIT License

    Copyright (c) 2019 Tom Jenkinson

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

// https://github.com/tjenkinson/media-element-syncer/blob/master/src/media-element-syncer.js

const EVENTS = ['play', 'pause', 'seeking', 'seeked', 'playing', 'stalled'];

class MediaElementSyncer {
  constructor(
    source,
    { refreshInterval = 200, correctionTime = 500, seekThreshold = 1000,
      preUpdateCallback = null,
      postUpdateCallback = null } = {},
  ) {
    this._source = source;
    this._children = [];
    this._updateTimer = null;
    this._refreshInterval = refreshInterval;
    this._correctionTime = correctionTime / 1000;
    this._seekThreshold = seekThreshold / 1000;
    this._preUpdateCallback = preUpdateCallback;
    this._postUpdateCallback = postUpdateCallback;
    this._config = new Map();
    let collecting = false;
    this._eventHandler = () => {
      if (collecting) {
        return;
      }
      collecting = true;
      window.setTimeout(() => {
        collecting = false;
        this._update();
      }, 0);
    };
  }

  addChild(element, { offset = 0 } = {}) {
    if (this._children.indexOf(element) === -1) {
      if (!this._children.length) {
        this._addEventListeners(this._source);
      }
      this._config.set(element, { offset });
      this._children.push(element);
      this._addEventListeners(element);
      this._update();
    }
  }

  removeChild(element) {
    const index = this._children.indexOf(element);
    if (index >= 0) {
      this._config.delete(element);
      this._removeEventListeners(element);
      this._children.splice(index, 1);
      if (!this._children.length) {
        if (this._updateTimer) {
          window.clearTimeout(this._updateTimer);
          this._updateTimer = null;
        }
        this._removeEventListeners(this._source);
      }
    }
  }

  _update() {
    if (this._updateTimer) {
      window.clearTimeout(this._updateTimer);
    }

    if (!this._children.length) {
      return;
    }

    if (this._preUpdateCallback) {
      this._preUpdateCallback();
    }

    const sourceTime = this._source.currentTime;
    const sourcePlaybackRate = this._source.playbackRate;
    this._children.forEach((child) => {
      try {
        const config = this._config.get(child);
        const targetTime = (sourceTime + config.offset / 1000) % child.duration;
        const sourcePaused = this._source.paused || this._source.ended || targetTime < 0 || targetTime >= child.duration;
        const currentTime = child.currentTime;
        const diff = targetTime - currentTime;
        const rate = ((diff + this._correctionTime) / this._correctionTime) * sourcePlaybackRate

        // console.log('targetTime', targetTime, 'currentTime', currentTime, 'diff', diff, 'rate', rate, 'sourcePaused', sourcePaused, 'sourcePlaybackRate', sourcePlaybackRate);

        if (sourcePaused !== child.paused) {
          sourcePaused ? child.pause() : child.play();
          console.log('syncing state');
        }
        if (sourcePaused || rate < 0.5 || rate > 2 || Math.abs(diff) >= this._seekThreshold) {
          child.currentTime = targetTime;
          child.playbackRate = sourcePlaybackRate;
          console.log('seeking', Math.round(diff*100)/100);
        } 
        else if (rate && child.playbackRate !== rate)  {
          // console.log('adapting rate', Math.round(rate*100)/100);
          child.playbackRate = rate;
        }
      } catch (e) {
        window.setTimeout(() => {
          throw e;
        }, 0);
      }
    });

    if (this._postUpdateCallback) {
      this._postUpdateCallback();
    }

    this._updateTimer = window.setTimeout(
      () => this._update(),
      this._refreshInterval
    );
  }

  _addEventListeners(element) {
    EVENTS.forEach((eventName) =>
      element.addEventListener(eventName, this._eventHandler)
    );
  }

  _removeEventListeners(element) {
    EVENTS.forEach((eventName) =>
      element.removeEventListener(eventName, this._eventHandler)
    );
  }
}
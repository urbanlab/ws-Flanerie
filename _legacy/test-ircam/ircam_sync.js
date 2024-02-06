import { SyncClient } from '@ircam/sync';

if (typeof window !== 'undefined') {
  window.SyncClient = SyncClient;
}
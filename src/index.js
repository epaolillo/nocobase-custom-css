/**
 * Plugin entry point for Nocobase Custom CSS
 */
import ServerPlugin from './server';
import { ClientPlugin } from './client';

export const Server = ServerPlugin;
export const Client = ClientPlugin;

export default {
  Server,
  Client
};

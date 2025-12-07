/**
 * Plugin entry point for Nocobase Custom CSS
 */
import ServerPlugin from './server';
import CustomCssPlugin from './client';

export const Server = ServerPlugin;
export const Client = CustomCssPlugin;

export default {
  Server,
  Client
};

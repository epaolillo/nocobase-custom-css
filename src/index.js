/**
 * Plugin entry point for Nocobase Custom CSS
 */
import CustomCssServerPlugin from './server';
import CustomCssClientPlugin from './client';

export const Server = CustomCssServerPlugin;
export const Client = CustomCssClientPlugin;

export default {
  Server,
  Client
};

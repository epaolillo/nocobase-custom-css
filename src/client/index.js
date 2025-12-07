/**
 * @file Client plugin implementation for Custom CSS
 */
import { Plugin } from '@nocobase/client';

/**
 * ClientPlugin class for the nocobase-custom-css plugin
 */
export class CustomCssPlugin extends Plugin {
  async load() {
    // Client-side initialization
    console.log('Nocobase Custom CSS Plugin - Client loaded');
  }
}

export default CustomCssPlugin;

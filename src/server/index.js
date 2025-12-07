/**
 * @file Server plugin implementation for Custom CSS
 */

/**
 * ServerPlugin class for the nocobase-custom-css plugin
 */
class ServerPlugin {
  constructor(options) {
    this.app = options.app;
  }

  /**
   * Load method called when the plugin is initialized
   */
  async load() {
    this.printWelcomeMessage();
  }

  /**
   * Prints a stylish welcome message to the console
   */
  printWelcomeMessage() {
    // ASCII art banner
    const banner = `
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ███╗   ██╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗       ║
║   ████╗  ██║██╔═══██╗██╔═══██╗██╔══██╗██╔══██╗██╔════╝       ║
║   ██╔██╗ ██║██║   ██║██║   ██║██████╔╝██████╔╝█████╗         ║
║   ██║╚██╗██║██║   ██║██║   ██║██╔══██╗██╔═══╝ ██╔══╝         ║
║   ██║ ╚████║╚██████╔╝╚██████╔╝██████╔╝██║     ███████╗       ║
║   ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝     ╚══════╝       ║
║                                                               ║
║   ██████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ███╗      ║
║  ██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔═══██╗████╗ ████║      ║
║  ██║     ██║   ██║███████╗   ██║   ██║   ██║██╔████╔██║      ║
║  ██║     ██║   ██║╚════██║   ██║   ██║   ██║██║╚██╔╝██║      ║
║  ╚██████╗╚██████╔╝███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║      ║
║   ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝      ║
║                                                               ║
║   ██████╗ ██╗     ██╗   ██╗ ██████╗ ██╗███╗   ██╗            ║
║   ██╔══██╗██║     ██║   ██║██╔════╝ ██║████╗  ██║            ║
║   ██████╔╝██║     ██║   ██║██║  ███╗██║██╔██╗ ██║            ║
║   ██╔═══╝ ██║     ██║   ██║██║   ██║██║██║╚██╗██║            ║
║   ██║     ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║            ║
║   ╚═╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
    `;

    // Color codes for terminal
    const colors = {
      reset: '\x1b[0m',
      bright: '\x1b[1m',
      cyan: '\x1b[36m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      magenta: '\x1b[35m',
      blue: '\x1b[34m',
    };

    // Print with colors
    console.log('\n');
    console.log(colors.cyan + colors.bright + banner + colors.reset);
    console.log(
      colors.green + colors.bright + 
      '          ✨ Nocobase Custom CSS Plugin loaded successfully! ✨' + 
      colors.reset
    );
    console.log('\n');
  }
}

export default ServerPlugin;


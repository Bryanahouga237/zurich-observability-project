// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  reporter: 'html',
  use: {
    // Prend une capture d'écran automatiquement uniquement si le test échoue
    screenshot: 'only-on-failure',
    // Trace complète en cas d'échec pour le debugging
    trace: 'retain-on-failure',
  },
});
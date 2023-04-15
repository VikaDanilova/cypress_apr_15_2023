const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1000,
    viewportWidth: 1280,
    videoUploadOnPasses: false,
    defaultCommandTimeout: 8000,
    chromeWebSecurity: false,
    specPattern: 'cypress/specs/**/*.js',
    screenshotsFolder: 'cypress/temp/screenshots',
    videosFolder: 'cypress/temp/videos',
    reporter: 'junit',
    baseUrl: 'https://www.blurb.com',
    reporterOptions: {
      mochaFile: 'cypress/temp/reports/report-[hash].xml',
      toConsole: true,
    },
    watchForFileChanges: false,
    testIsolation: false,
  },
})

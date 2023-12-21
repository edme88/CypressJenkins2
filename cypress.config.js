const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports",
    reportFilename: "my_new_report",
    //reportFilename: "[status]_[datetime]-[name]-report",
    //timestamp: "longDate",
    quiet: true,
    json: true,
    html: true,
  },
  env: {
    grepFilterSpecs: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});

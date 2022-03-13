// const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  tests: './*_test.js',
  output: './output',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  helpers: {
    Protractor: {
      url: 'http://todomvc.com/examples/angularjs/',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'mytest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};

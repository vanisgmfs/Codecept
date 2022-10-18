const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: '/Users/Vanilson Silva/Projetos/Codecept/app/app-release.apk',
      desiredCapabilities: {
       platformName: "Android",
       platformVersion: "9",
       deviceName: "K5AXB600B320EHG",
       automationName: "UiAutomator2",
       appActivity: "MainActivity",
       appPackage: "com.qazandoapp"
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codecept',
  plugins:{
    retryFailedStep:{
      enable: true
    },
    screenshotOnFaild: {
      enable: true
    }
  }
}
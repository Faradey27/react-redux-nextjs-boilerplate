const spawn = require('react-dev-utils/crossSpawn');
const { exec } = require('child_process');
const TIME_FOR_SERVER_SETUP = 2000;

exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
  },
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:3000',
  specs: ['__test__/**/*.e2e.js'],
  onPrepare() {
    require('babel-register');
    browser.ignoreSynchronization = true; // eslint-disable-line
    exec('kill -kill `lsof -t -i tcp:3000`');

    spawn.sync('npm', ['run', 'build'], { stdio: 'inherit' });
    spawn('npm', ['run', 'start:server'], { stdio: 'inherit' });

    const promise = new Promise((resolve) => setTimeout(() => resolve(), TIME_FOR_SERVER_SETUP));

    return promise;
  },
};

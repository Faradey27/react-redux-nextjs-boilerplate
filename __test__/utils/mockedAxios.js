const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { HOST } = require('./../../src/utils/ajax');

const mock = new MockAdapter(axios);

export const mockLocales = () => {
  mock.onGet(`${HOST}/assets/locales/en.json`).reply(200, {
    data: require('./../../src/assets/locales/en.json'),
  });
};

export default mock;

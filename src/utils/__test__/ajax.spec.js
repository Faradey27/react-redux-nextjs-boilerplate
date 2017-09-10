import mock from './../../../__test__/utils/mockedAxios';
import ajax, { HOST } from './../ajax';

describe.only('Ajax', () => {
  beforeEach(() => {
    mock.
      onGet(`${HOST}/users`).reply(200, { id: 1 }).
      onPost(`${HOST}/users`).
      reply(200, { id: 2 });
  });

  afterEach(() => {
    mock.reset();
  });

  it('should use get to send a request', async () => {
    expect(await ajax.get('/users')).toEqual({ id: 1 });
  });

  it('should use post to send a request', async () => {
    expect(await ajax.post('/users')).toEqual({ id: 2 });
  });
});

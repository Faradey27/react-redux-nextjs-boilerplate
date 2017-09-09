import middleware from './../apiMiddleware';

describe('Middleware should handle actions correctly', () => {
  it('Should handle action without promise and call next 1', () => {
    const action = {};
    const next = jest.fn();

    middleware({})({})(next)(action);

    expect(next.mock.calls.length).toEqual(1);
  });

  it('Should handle action which is a function, and call it once', () => {
    const action = jest.fn();

    middleware({})({})()(action);

    expect(action.mock.calls.length).toEqual(1);
  });

  it('Should handle action with start action type and call next on it', (done) => {
    const NUMBER_OF_NEXT_CALLS = 2;
    const action = { promise: () => Promise.resolve({ id: 1 }), types: ['START', 'SUCCESS', 'FAILURE'], meta: {} };
    const next = jest.fn();

    middleware({})({})(next)(action).then(() => {
      expect(next.mock.calls.length).toEqual(NUMBER_OF_NEXT_CALLS);

      done();
    });

    expect(next.mock.calls.length).toEqual(1);
  });

  it('Should handle action with start action type and call next on it when promise rejected', (done) => {
    const NUMBER_OF_NEXT_CALLS = 2;
    const action = { promise: () => Promise.reject({ id: 1 }), types: ['START', 'SUCCESS', 'FAILURE'], meta: {} };
    const next = jest.fn();

    middleware({})({})(next)(action).catch(() => {
      expect(next.mock.calls.length).toEqual(NUMBER_OF_NEXT_CALLS);

      done();
    });

    expect(next.mock.calls.length).toEqual(1);
  });
});

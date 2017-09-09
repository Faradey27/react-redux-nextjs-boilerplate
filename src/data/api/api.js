class Api {
  get = () => Promise.resolve([{ id: 1 }, { id: 2 }]);
}

export default (new Api());

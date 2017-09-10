import axios from 'axios';
export const HOST = 'http://localhost:3000';

const sendRequest = ({ method, endpoint, body }) => axios[method](HOST + endpoint, body).then((res) => res.data);

export default {
  get: (endpoint) => sendRequest({ method: 'get', endpoint }),
  post: (endpoint, body) => sendRequest({ method: 'post', endpoint, body }),
};

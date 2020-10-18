import axios from 'axios';

const HOST = '127.0.0.1';
const PORT = '8080';

export default axios.create({
  baseURL: `http://${HOST}:${PORT}`
});

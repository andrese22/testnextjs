import axios from 'axios';

const client = axios.create({
  baseURL: ' https://publish.ne.cision.com/papi/',
  timeout: 5000,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
});

export default client;

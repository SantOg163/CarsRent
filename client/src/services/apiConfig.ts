import axios from 'axios';

const apiConfig = axios.create({ baseURL: 'http://localhost:3000', withCredentials: true });

export default apiConfig;

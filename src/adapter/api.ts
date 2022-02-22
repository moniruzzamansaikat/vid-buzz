import Axios from 'axios';

export const apiKey = process.env.REACT_APP_API_KEY;
export const api = Axios.create({
  baseURL: 'https://api.coverr.co/',
});

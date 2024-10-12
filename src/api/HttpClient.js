import axios from 'axios';

import config from '../config';
const axiosConfig = config.axios;

/**
 * Axios HTTP client instance pre-configured with base URL and timeout.
 * Intercepts responses to return only the `data` field.
 *
 * @type {import('axios').AxiosInstance}
 */
const HttpClient = axios.create({
  baseURL: axiosConfig.baseURL,
  timeout: axiosConfig.timeout,
});

/**
 * Interceptor for Axios responses to return only the `data` field.
 *
 * @param {import('axios').AxiosResponse} response - The full Axios response object.
 * @returns {any} The `data` property of the response.
 */
HttpClient.interceptors.response.use(response => {
  return response.data;
});

export default HttpClient;

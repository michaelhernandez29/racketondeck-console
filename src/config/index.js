const ENV = process.env;

export default {
  axios: {
    baseURL: ENV.REACT_APP_API_BASE_URL,
    timeout: Number.parseInt(ENV.REACT_APP_API_TIMEOUT, 10) || 5000,
  },
};

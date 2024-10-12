import Endpoints from '../Endpoints';
import HttpClient from '../HttpClient';

/**
 * Sends a POST request to log in a user.
 *
 * @param {Object} data - The user credentials for login.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves with the server response, typically containing the authentication token.
 */
const login = async (data) => {
  return HttpClient.post(Endpoints.LOGIN, data);
};

export default { login };

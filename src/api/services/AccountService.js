import Endpoints from '../Endpoints';
import HttpClient from '../HttpClient';

/**
 * Sends a POST request to create a new user account.
 *
 * @param {Object} data - The user data to be sent in the POST request. This typically includes information like name, email, and password.
 * @param {string} data.name - The name of the user.
 * @param {string} data.email - The email of the user.
 * @param {string} data.password - The password for the user account.
 * @returns {Promise<Object>} The response from the API, typically containing the created user data.
 */
const create = async (data) => {
  return HttpClient.post(Endpoints.ACCOUNTS, data);
};

export default { create };

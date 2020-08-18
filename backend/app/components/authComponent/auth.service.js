const consola = require('consola');

class AuthService {
	constructor() {}

	async login({ email, password }) {
		try {
		} catch (error) {
			consola.error(error);
		}
	}

	async register({ firstName, lastName, userName, email, password, role }) {
		try {
		} catch (error) {
			consola.error(error);
		}
	}
}

module.exports = AuthService;

const AuthService = require('./auth.service.js');

const consola = require('consola');

class AuthController {
	constructor() {
		this.authService = new AuthService();

		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
	}

	async login() {
		try {
		} catch (error) {
			consola.error(error);
		}
	}

	async register() {
		try {
		} catch (error) {
			consola.error(error);
		}
	}
}

module.exports = AuthController;

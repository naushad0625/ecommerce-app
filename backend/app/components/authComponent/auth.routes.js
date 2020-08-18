const express = require('express');

const AuthController = require('./auth.controller.js');

class AuthRoutes {
	constructor() {
		this.router = express.Router();
		this.authController = new AuthController();
	}

	async configure() {
		try {
			this.router.post('/login', this.authController.login);
			this.router.post('/register', this.authController.register);
		} catch (error) {}
	}

	getRouter() {
		return this.router;
	}
}

module.exports = AuthRoutes;

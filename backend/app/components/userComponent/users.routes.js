const express = require('express');
const UserController = require('./user.controller.js');

class UsersRoutes {
	constructor() {
		this.router = express.Router();

		this.userController = new UserController();
	}

	async configure() {
		try {
			this.router.get('/', this.userController.getAll);
			this.router.get('/:user_id', this.userController.getById);
			this.router.patch('/:user_id', this.userController.update);
		} catch (error) {}
	}

	getRouter() {
		return this.router;
	}
}

module.exports = UsersRoutes;

const express = require('express');

class Router {
	constructor() {
		this.router = express.Router();
	}

	async configure() {
		this.router.get('', (req, res, next) => {
			res.send('Get successful!');
		});
	}

	getRouter() {
		return this.router;
	}
}

module.exports = Router;

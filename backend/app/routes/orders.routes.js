const express = require('express');

class OrdersRoutes {
	constructor() {
		this.router = express.Router();
	}

	async configure() {
		try {
		} catch (error) {}
	}

	getRouter() {
		return this.router;
	}
}

module.exports = OrdersRoutes;

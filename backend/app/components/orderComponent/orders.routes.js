const express = require('express');

const OrderController = require('./order.controller.js');

class OrdersRoutes {
	constructor() {
		this.router = express.Router();

		this.orderController = new OrderController();
	}

	async configure() {
		try {
			this.router.get('/', this.orderController.getAll);
			this.router.get('/:order_id', this.orderController.getById);

			this.router.post('/new', this.orderController.create);
			this.router.post('/payment', this.orderController.pay);
		} catch (error) {}
	}

	getRouter() {
		return this.router;
	}
}

module.exports = OrdersRoutes;

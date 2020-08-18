const OrderService = require('./order.service.js');

const consola = require('consola');

class OrderController {
	constructor() {
		this.orderService = new OrderService();

		this.pay = this.pay.bind(this);
		this.create = this.create.bind(this);
		this.getAll = this.getAll.bind(this);
		this.getById = this.getById.bind(this);
	}

	async getAll(req, res, next) {
		try {
			const user_id = req.currentUser.id;
			const orders = await this.orderService.findAll(user_id);
			if (!orders) {
				return res.status(204).send('No order has been placed yet!');
			}
			return res.status(200).json(orders);
		} catch (error) {
			consola.error(error);
			res.status(500).send(error);
		}
	}

	async getById(req, res, next) {
		try {
			const order_id = req.params.order_id;
			const order = this.orderService.findById(order_id);
			if (!order) {
				return res.status(404).send('Order not found!');
			}

			return res.status(200).json(order);
		} catch (error) {
			consola.error(error);
			res.status(500).send(error);
		}
	}

	async create(req, res, next) {
		try {
			const order = req.body;
			order.user_id = req.currentUser.id;
			let msg = await this.orderService.create(order);
			return res.status(201).json(msg);
		} catch (error) {}
	}

	async pay() {}
}

module.exports = OrderController;

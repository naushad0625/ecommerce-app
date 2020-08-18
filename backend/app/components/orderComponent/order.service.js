const Order = require('./order.model');

const consola = require('consola');

class OrderService {
	constructor() {
		this.findById = this.findById.bind(this);
		this.findAll = this.findAll.bind(this);
		this.create = this.create(this);
		this.pay = this.pay.bind(this);
	}

	async findAll(user_id) {
		try {
			let orders = await Order.findAll({
				where: {
					user_id,
				},
			});

			return orders;
		} catch (error) {
			throw error;
		}
	}

	async findById(order_id) {
		try {
			const order = await Order.findOne({
				where: {
					order_id,
				},
			});

			return order;
		} catch (error) {
			throw error;
		}
	}

	async create({ product_id, quantity, user_id }) {
		try {
			if (!product_id || !quantity) {
				throw new Error('Invalid User Input');
			}
			const order = new Order({ quantity, product_id, order_id });
			await order.save();
			return 'Odere has been placed successfully.';
		} catch (error) {
			throw error;
		}
	}
	async pay() {}
}

module.exports = OrderService;

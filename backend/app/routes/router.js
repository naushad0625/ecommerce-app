const express = require('express');

const AuthRouter = require('./auth.routes.js');
const UsersRouter = require('./users.routes.js');
const OrdersRouter = require('./orders.routes.js');
const ProductsRouter = require('./products.routes.js');

class Router {
	constructor() {
		this.router = express.Router();

		this.authRouter = new AuthRouter();
		this.usersRouter = new UsersRouter();
		this.ordersRouter = new OrdersRouter();
		this.productsRouter = new ProductsRouter();
	}

	async configure() {
		//configure sub-routers
		this.authRouter.configure();
		this.usersRouter.configure();
		this.ordersRouter.configure();
		this.productsRouter.configure();

		//configure paths
		this.router.use('/auth', this.authRouter.getRouter());
		this.router.use('/users', this.usersRouter.getRouter());
		this.router.use('/orders', this.ordersRouter.getRouter());
		this.router.use('/products', this.productsRouter.getRouter());
	}

	getRouter() {
		return this.router;
	}
}

module.exports = Router;

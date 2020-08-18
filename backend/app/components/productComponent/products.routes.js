const express = require('express');
const ProductController = require('./products.contorller.js');

class ProductsRoutes {
	constructor() {
		this.router = express.Router();

		this.productContorller = new ProductController();
	}

	async configure() {
		try {
			this.router.get('/', this.productContorller.getAllProducts);
			this.router.get('/:productId', this.productContorller.getProduct);
			this.router.get(
				'/category/:categoryName',
				this.productContorller.getProductsByCategory,
			);
		} catch (error) {}
	}

	getRouter() {
		return this.router;
	}
}

module.exports = ProductsRoutes;

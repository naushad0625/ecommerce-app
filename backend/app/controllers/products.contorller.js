const consola = require('consola');
const ProductsService = require('../services/products.service.js');

class ProductsController {
	constructor() {
		this.productService = new ProductsService();

		this.getProduct = this.getProduct.bind(this);
		this.getAllProducts = this.getAllProducts.bind(this);
		this.getProductsByCategory = this.getProductsByCategory.bind(this);
	}

	async getAllProducts(req, res, next) {
		try {
			let products = await this.productService.findAll();
			res.status(200).json(products);
		} catch (error) {
			consola.error(error);
		}
	}

	async getProduct(req, res, next) {
		try {
			const product = await this.productService.findById(
				req.params.productId,
			);
			res.status(200).json({});
		} catch (error) {
			consola.error(error);
		}
	}

	async getProductsByCategory(req, res, next) {
		try {
			const products = await this.productService.findByCategory(
				req.params.categoryName,
			);
			res.status(200).json({});
		} catch (error) {}
	}
}

module.exports = ProductsController;

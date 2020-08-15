const { Sequelize } = require('sequelize');

const User = require('../models/user.model.js');
const Order = require('../models/order.model.js');
const Product = require('../models/product.model.js');

const consola = require('consola');

class DbConfig {
	async configure() {
		try {
			this.connection = await this.createConnection();
			await this.connection.authenticate();
			await this.createTables();
			await this.createAssociations();
			await this.syncWithDatabase();
		} catch (error) {
			consola.error(error);
		}
	}

	async createConnection() {
		try {
			let connection = new Sequelize(
				process.env.DATABASE,
				process.env.USER_NAME,
				process.env.PASSWORD,
				{
					host: process.env.HOST,
					dialect: process.env.DIALECT,
				},
			);
			return connection;
		} catch (error) {
			consola.error(error);
		}
	}

	async createTables() {
		try {
			User.init(this.connection);
			Order.init(this.connection);
			Product.init(this.connection);
		} catch (error) {
			consola.error(error);
		}
	}

	async createAssociations() {
		try {
		} catch (error) {
			consola.error(error);
		}
	}

	async syncWithDatabase() {
		try {
			User.model.sync();
			Order.model.sync();
			Product.model.sync();
		} catch (error) {
			consola.error(error);
		}
	}

	belongsToOne(referencing_model, referenced_model, foreign_key) {
		referencing_model.belongsTo(referenced_model, {
			foreignKey: foreign_key,
		});
	}
}

module.exports = DbConfig;

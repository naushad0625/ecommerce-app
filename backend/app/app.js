const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyparser = require('body-parser');

const consola = require('consola');

const Router = require('./router.js');
const DbConfig = require('./db.config.js');

class App {
	constructor() {
		this.app = express();
		this.router = new Router();
		this.dbConfig = new DbConfig();
	}

	async configure() {
		try {
			//app configurations
			this.app.use(cors());
			this.app.use(helmet());
			this.app.use(bodyparser.json());
			this.app.use(bodyparser.urlencoded({ extended: false }));

			//database configurations
			this.dbConfig.configure();

			//route configurations
			this.router.configure();

			consola.success({
				message: 'app has been configured successfully.',
				badge: true,
			});

			//setting root route
			this.app.use('/', this.router.getRouter());
		} catch (error) {
			consola.error(error);
		}
	}

	getApp() {
		return this.app;
	}
}

module.exports = App;

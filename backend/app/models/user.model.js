const mongoose = require('mongoose');

const consola = require('consola');

class UserModel {
	constructor() {}

	async initModel() {
		try {
			this.model = mongoose.Schema({
				id: mongoose.Schema.Types.ObjectId,
				user_name: {
					type: mongoose.Schema.Types.String,
					required: true,
					default: 'guest',
				},
				email: {
					type: mongoose.Schema.Types.String,
					required: true,
					unique: true,
				},
			});
		} catch (error) {
			consola.error(error);
		}
	}

	getModel() {
		return this.model;
	}
}

module.exports = UserModel;

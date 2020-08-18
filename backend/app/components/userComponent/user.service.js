const UserModel = require('./user.model');

const User = require('./user.model.js');

const consola = require('consola');

class UserService {
	async findAll(email) {
		try {
			let user = await User.findOne({
				where: {
					email: email,
				},
			});
			return { email: user.email, role: user.role };
		} catch (error) {
			consola.error(error);
		}
	}

	async findById(email) {
		try {
			let user = await User.findOne({
				where: {
					email: email,
				},
			});
			return { email: user.email, role: user.role };
		} catch (error) {
			consola.error(error);
		}
	}

	async update(email) {
		try {
			let user = await User.findOne({
				where: {
					email: email,
				},
			});
			return { email: user.email, role: user.role };
		} catch (error) {
			consola.error(error);
		}
	}
}

module.exports = UserService;

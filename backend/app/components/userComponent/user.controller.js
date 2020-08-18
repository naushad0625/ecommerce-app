const UserService = require('./user.service.js');

const consola = require('consola');

class UserController {
	constructor() {
		this.userService = new UserService();

		this.update = this.update.bind(this);
		this.getAll = this.getAll.bind(this);
		this.getById = this.getById.bind(this);
	}

	async getAll(req, res, next) {
		try {
			const users = await this.userService.findAll();
			if (!users) {
				return res.status(204).send('Empty user list!');
			}
			return res.status(200).json({ users });
		} catch (error) {
			consola.error(error);
			res.status(500).send(error);
		}
	}

	async getById(req, res, next) {
		try {
			const user_id = req.params.user_id;
			const user = await this.userService.findById(user_id);
			if (!user) {
				return res.status(404).sent('User not found!');
			}
			return res.status(200).json({ user });
		} catch (error) {
			consola.error(error);
			res.status(500).send(error);
		}
	}

	async update(req, res, next) {
		try {
		} catch (error) {
			consola.error(error);
			res.status(500).send(error);
		}
	}
}

module.exports = UserController;

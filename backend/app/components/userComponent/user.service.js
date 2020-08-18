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

	async update(user_id, updatedUser) {
		try {
			let user = await User.findOne({
				where: {
					id: user_id,
				},
			});

			if (!user) {
				throw new Error('User Not Found!');
			}

			let _firstName = updatedUser.firstName;
			let _lastName = updatedUser.lastName;
			let _userName = updatedUser.userName;
			let _email = updatedUser.email;
			let _password = updatedUser.password;

			await User.update(
				{
					firstName:
						_firstName !== undefined ? _firstName : user.firstName,
					lastName:
						_lastName !== undefined ? _lastName : user.lastName,
					userName:
						_userName !== undefined ? _userName : user.userName,
					email: _email !== undefined ? _email : user.email,
				},
				{ where: { id: user_id } },
			);
			return { email: user.email, role: user.role };
		} catch (error) {
			consola.error(error);
		}
	}
}

module.exports = UserService;

const AccessControl = require('accesscontrol');

const consola = require('consola');

class Roles {
	constructor() {
		this.accessControl = new AccessControl();
	}

	async setPermissions() {
		try {
			//Permissions for guest user
			this.accessControl
				.grant('guest')
				.readOwn('profile')
				.readAny('product');

			//Permissions for registered users
			this.accessControl
				.grant('user')
				.extend('user')
				.updateOwn('profile')
				.createOwn('order')
				.updateOwn('order')
				.deleteOwn('order');

			//Permission for admins
			this.accessControl
				.grant('admin')
				.extend('user')
				.readAny('profile')
				.updateAny('profile')
				.deleteAny('profile')
				.updateAny('product')
				.deleteAny('product');
		} catch (error) {
			consola.error(error);
		}
	}

	getAccessControl() {
		return this.accessControl;
	}
}

module.exports = new Roles();

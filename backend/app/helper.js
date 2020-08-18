const jwt = require('jsonwebtoken');

const UserService = require('./components/userComponent/user.service.js');
const accessControl = require('./roles.js').getAccessControl();

const consola = require('consola');

class Helper {
	constructor() {
		this.userService = new UserService();

		this.allowIfLoggedIn = this.allowIfLoggedIn.bind(this);
		this.grantPermission = this.grantPermission.bind(this);
		this.allowAnyUser = this.allowAnyUser.bind(this);
	}

	async allowIfLoggedIn(req, res, next) {
		if (req.headers.authorization) {
			try {
				let authorization = req.headers.authorization.split(' ');
				if (authorization[0] !== 'Bearer') {
					res.status(401).send('Invalid auth credentials');
				}
				let payload = jwt.verify(
					authorization[1],
					process.env.JWT_SECRET,
				);

				if (payload.exp < Date.now().valueOf() / 1000) {
					res.status(440).send('Session expired.');
				}

				res.locals.currentUser = await this.userService.findByEmail(
					payload.email,
				);
				return next();
			} catch (error) {
				consola.error(error);
			}
		} else {
			res.status(403).send('Unauthorized Access!');
		}
	}

	async allowAnyUser(req, res, next) {
		if (res.locals.currentUser) {
			try {
				req.currentUser = res.locals.currentUser;
				next();
			} catch (error) {}
		} else {
			res.status(403).send('Unauthorized Access!');
		}
	}

	grantPermission(action, target) {
		return async (req, res, next) => {
			try {
				const permission = accessControl
					.can(req.currentUser.role)
					[action](target);

				if (!permission.granted) {
					return res.status(401).send('Unauthorized Access!');
				}

				next();
			} catch (error) {
				consola.error(error);
				res.status(500).send(error);
			}
		};
	}
}

module.exports = new Helper();

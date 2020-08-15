const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const consola = require('consola');

class Helper {
	constructor() {
		this.checkAuthentication = this.checkAuthentication.bind(this);
	}

	async checkAuthentication(req, res, next) {
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

				let authenticatedUser = mongoose.fi;
				res.locals.authenticatedUser = req.jwt = jwt;
				return next();
			} catch (error) {
				consola.error(error);
			}
		} else {
			res.status(403).send('Unauthorized Access!');
		}
	}
}

module.exports = new Helper();

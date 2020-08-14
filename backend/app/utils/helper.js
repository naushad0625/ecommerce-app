const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class Helper {
	constructor() {}

	async validateJwt(req, res, next) {
		if (req.headers['authorization']) {
			try {
				let authorization = req.headers['authorization'].split(' ');
				if (authorization[0] !== 'Bearer') {
					res.status(401).send('Invalid auth credentials');
				}
				req.jwt = jwt.verify(authorization[1], process.env.JWT_SECRET);
				return next();
			} catch (error) {}
		} else {
			res.status(403).send('Unauthorized Access!');
		}
	}

	async;
}

module.export = new Helper();

const Sequelize = require('sequelize');

class UserModel extends Sequelize.Model {
	static init(connection) {
		this.model = super.init(
			{},
			{
				sequelize: connection,
				modelName: 'User',
				tableName: 'user',
			},
		);
	}
}

module.exports = UserModel;

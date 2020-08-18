const { Sequelize, DataTypes, Model } = require('sequelize');

class UserModel extends Model {
	static init(connection) {
		this.model = super.init(
			{
				firstName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				lastName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				userName: {
					type: DataTypes.STRING,
					allownull: false,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				password: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				role: {
					type: DataTypes.ENUM,
					values: ['guest', 'user', 'admin'],
				},
			},
			{
				sequelize: connection,
				modelName: 'User',
				tableName: 'user',
			},
		);
	}
}

module.exports = UserModel;

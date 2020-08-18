const { Model, DataTypes } = require('sequelize');

class OrderModel extends Model {
	static init(connection) {
		this.model = super.init(
			{
				qunatity: {
					type: DataTypes.INTEGER,
					default: 1,
				},
			},
			{
				sequelize: connection,
				modelName: 'Order',
				tableName: 'order',
			},
		);
	}
}

module.exports = OrderModel;

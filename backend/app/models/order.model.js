const Sequelize = require('sequelize');

class OrderModel extends Sequelize.Model {
	static init(connection) {
		this.model = super.init(
			{},
			{
				sequelize: connection,
				modelName: 'Order',
				tableName: 'order',
			},
		);
	}
}

module.exports = OrderModel;

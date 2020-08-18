const Sequelize = require('sequelize');

class ProductModel extends Sequelize.Model {
	static init(connection) {
		this.model = super.init(
			{},
			{
				sequelize: connection,
				modelName: 'Product',
				tableName: 'product',
			},
		);
	}
}

module.exports = ProductModel;

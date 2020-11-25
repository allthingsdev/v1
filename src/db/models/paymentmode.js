const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PaymentMode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PaymentMode.init(
        {
            mode_id: DataTypes.UUID,
            mode_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'PaymentMode',
            tableName: 'app_payment_modes'
        }
    );
    return PaymentMode;
};

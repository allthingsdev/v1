const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Place extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Place.init(
        {
            place_id: DataTypes.UUID,
            place_name: DataTypes.STRING,
            place_desc: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Place',
            tableName: 'app_places'
        }
    );
    return Place;
};

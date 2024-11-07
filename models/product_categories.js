const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const product_categories = sequelize.define('product_categories', {
    id: {
        type: DataTypes.STRING(35),
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    tableName: 'product_categories',
    freezeTableName: true,
    
})

module.exports = product_categories
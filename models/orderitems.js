'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    ProductId: DataTypes.DECIMAL,
    OrderId: DataTypes.DECIMAL,
    quantidade: DataTypes.DECIMAL
  }, {});
  OrderItems.associate = function(models) {
    // associations can be defined here
  };
  return OrderItems;
};
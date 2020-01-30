'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    clientName: DataTypes.STRING,
    statusOrder: DataTypes.STRING,
    NumberTable: DataTypes.DECIMAL
  }, {});
  orders.associate = function(models) {
    // orders.hasMany(models.orderItems)
  };
  return orders;
};
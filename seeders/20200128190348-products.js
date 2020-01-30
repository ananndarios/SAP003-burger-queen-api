'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('products', [
      {
        name: 'Café Americano',
        price: 5,
        type: 'Breakfast',
        category: 'Café da Manhã',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Café com Leite',
        price: 7,
        type: 'Breakfast',
        category: 'Café da Manhã',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Misto Quente',
        price: 10,
        type: 'Breakfast',
        category: 'Café da Manhã',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suco de fruta natural',
        price: 7,
        type: 'Breakfast',
        category: 'Café da Manhã',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hambúrguer Simples',
        price: 10,
        type: 'Fullday',
        category: 'buger',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hambúrguer Duplo',
        price: 15,
        type: 'Fullday',
        category: 'buger',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batata Frita',
        price: 5,
        type: 'Fullday',
        category: 'sidedish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Anéis de Cebola',
        price: 5,
        type: 'Fullday',
        category: 'sidedish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Água 500ml',
        price: 5,
        type: 'Fullday',
        category: 'beverage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Água 750ml',
        price: 7,
        type: 'Fullday',
        category: 'beverage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        type: 'Fullday',
        category: 'beverage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante de 750ml',
        price: 10,
        type: 'Fullday',
        category: 'beverage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ])
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('products', null, {});
  }
};

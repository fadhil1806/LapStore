'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.STRING(55),
        allowNull: false,
        primaryKey: true
      },
      category_id: {
        type: Sequelize.STRING(35),
        allowNull: false,
        references: {
          model: 'product_categories',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_sold: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      material: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: '-'
      },
      country_of_origin: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: '-'
      },
      type: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: '-'
      },
      thumbnail_url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      thumbnail_alt: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};

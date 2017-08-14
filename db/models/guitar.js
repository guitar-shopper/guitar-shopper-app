'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('guitars', {
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  orientation: {
    type: Sequelize.ENUM('right', 'left'),
    defaultValue: 'right'
  },
  description: {
    type: Sequelize.TEXT
  },
  imageURL: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports.associations = (Guitar, { Brand }) => {
  Guitar.belongsTo(Brand)
}

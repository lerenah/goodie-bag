const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'www.google.com'
  }
});

var Sequelize = require('sequelize');
var config = require('../config');

var sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: './db/chat.sqlite'
});

module.exports = sequelize;

var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Report = sequelize.define('chats', {
  message: Sequelize.TEXT,
}, {
  timestamps: true,
  instanceMethods: {
    toJSON: async function () {
      return {
        // This is a unique id that is generated automatically
        id: this.id,
        // This also comes for free
        createdAt: this.createdAt,
        message: this.message,
      };
    },
  },
});

module.exports = Report;

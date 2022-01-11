const Sequelize = require('sequelize');

const connection = new Sequelize("receita_oculos", 'postgres', 'ufc123', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
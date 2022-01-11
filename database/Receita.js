const Sequelize = require("sequelize");
const connection = require("./database");

const Receita = connection.define('receitas', {

    Paciente:{
        type: Sequelize.STRING,
        allowNull: false
    },

    OdEsfericoPerto:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OeEsfericoPerto:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    
    OdCilindricoPerto:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OeCilindricoPerto:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OdEixoPerto:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OeEixoPerto:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OdEsfericoLonge:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OeEsfericoLonge:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    
    OdCilindricoLonge:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OeCilindricoLonge:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OdEixoLonge:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    OeEixoLonge:{
        type: Sequelize.TEXT,
        allowNull: true
    },

    Observacoes:{
        type: Sequelize.TEXT,
        allowNull: true
    },
});

Receita.sync({force: false}).then(() => {});

module.exports = Receita;
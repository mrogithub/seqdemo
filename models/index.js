const Sequelize = require('sequelize');

const sequelize = new Sequelize('dball-2', 'postgres', 'postgres',
    { dialect: 'postgres', port: 5500, host: '127.0.0.1'});

const models = {
    Dtmf: sequelize.import('./dtmf'),
    Site: sequelize.import('./site'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

// Define the relations // associations between the models

models.Dtmf.belongsTo(models.Site, {foreignKey: 'site_id'});
models.Site.hasMany(models.Dtmf, {foreignKey: 'site_id', sourceKey: 'site_id'});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

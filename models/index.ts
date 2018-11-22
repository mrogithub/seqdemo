import * as Sequelize from "sequelize";

import {initDtmfModel} from "./dtmf";
import {initSiteModel} from "./site";

const sequelize = new Sequelize('dball-2', 'postgres', 'postgres',
    { dialect: 'postgres', port: 5500, host: '127.0.0.1'});

const models = {
    sequelize,
    Sequelize,
    Dtmf: initDtmfModel(sequelize),
    Site: initSiteModel(sequelize)
};

Object.keys(models).forEach( (key) =>{
     // @ts-ignore
    if ('associate' in models[key]) {
        // @ts-ignore
        models[key].associate(models);
    }
});

// Define the relations // associations between the models
//
// models.Dtmf.belongsTo(models.Site, {foreignKey: 'site_id'});
// models.Site.hasMany(models.Dtmf, {foreignKey: 'site_id', sourceKey: 'site_id'});
//
// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

module.exports = models;

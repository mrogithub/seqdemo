import * as Sequelize from "sequelize";

import DtmfFactory from "./dtmf";
import SiteFactory from "./site";

const sequelize = new Sequelize('dball-2', 'postgres', 'postgres',
    { dialect: 'postgres', port: 5500, host: '127.0.0.1'});

const models = {
    sequelize,
    Sequelize,
    Dtmf: DtmfFactory(sequelize),
    Site: SiteFactory(sequelize)
};


// Define the relations // associations between the models
//
// models.Dtmf.belongsTo(models.Site, {foreignKey: 'site_id'});
// models.Site.hasMany(models.Dtmf, {foreignKey: 'site_id', sourceKey: 'site_id'});
//
// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

module.exports = models;

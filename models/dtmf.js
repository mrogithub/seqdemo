"use strict";
// "use strict";
// /* jshint indent: 2 */
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
function initDtmfModel(sequelize) {
    const attributes = {
        dtmf_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        site_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'SiteModel',
                key: 'site_id'
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sequenz: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ton: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pause: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        grantton: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        grantton_puls: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        grantton_klang: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    };
    const model = sequelize.define("Dtmf", attributes, { tableName: 'dtmf', timestamps: false });
    model.associate = ({ Site }) => {
        model.belongsTo(Site, { foreignKey: 'site_id', targetKey: 'site_id', as: 'site' });
    };
    return model;
}
exports.initDtmfModel = initDtmfModel;

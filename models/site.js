"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
function initSiteModel(sequelize) {
    const attributes = {
        site_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        site_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        db_action: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'passive'
        },
        db_action_function: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'now'
        },
        db_action_date_time: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'to_char(now(), YYYY-MM-DD HH24:MI:SS'
        }
    };
    const model = sequelize.define("Site", attributes, { tableName: 'site', timestamps: false });
    return model;
}
exports.initSiteModel = initSiteModel;

"use strict";
/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('dtmf', {
        dtmf_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        site_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'site',
                key: 'site_id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sequenz: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ton: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pause: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        grantton: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        grantton_puls: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        grantton_klang: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'dtmf',
        timestamps: false
    });
};
//# sourceMappingURL=dtmf.js.map

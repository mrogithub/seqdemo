// "use strict";
// /* jshint indent: 2 */

import * as Sequelize from "sequelize";
import {SiteModel} from "./site";

interface DtmfAttributes {
        dtmf_id: number;
        site_id: number;
        name: string;
        sequenz: string;
        ton: number;
        pause: number;
        grantton: number;
        grantton_puls: number;
        grantton_klang: number;
        createdAt?: string;
        updatedAt?: string;
        Site?: SiteModel;
}

type DtmfInstance = Sequelize.Instance<DtmfAttributes> & DtmfAttributes;
export type DtmfModel    = Sequelize.Model<DtmfInstance, DtmfAttributes>;

export function initDtmfModel(sequelize: Sequelize.Sequelize) : DtmfModel {

    const attributes: SequelizeAttributes<DtmfAttributes> = {
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

    const model =  sequelize.define<DtmfInstance, DtmfAttributes>("Dtmf", attributes, {tableName: 'dtmf', timestamps: false});

    model.associate = ( {Site} : {Site: SiteModel}) =>{
        model.belongsTo( Site, {foreignKey: 'site_id', targetKey: 'site_id', as: 'site'});
    };

    return model;
}

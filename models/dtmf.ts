// "use strict";
// /* jshint indent: 2 */

import * as Sequelize from "sequelize";

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

}

type DtmfInstance = Sequelize.Instance<DtmfAttributes> & DtmfAttributes;

export default(sequelize: Sequelize.Sequelize) => {

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
                model: 'site',
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

    return sequelize.define<DtmfInstance, DtmfAttributes>("Dtmf", attributes, {tableName: 'dtmf', timestamps: false});
}

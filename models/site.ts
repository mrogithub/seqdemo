
import * as Sequelize from "sequelize";

interface SiteAttributes{
    site_id: number;
    site_name: string;
    db_action: string;
    db_action_function: string;
    db_action_date_time: string;
}

type SiteInstance = Sequelize.Instance<SiteAttributes> & SiteAttributes;


export default(sequelize: Sequelize.Sequelize) => {

    const attributes: SequelizeAttributes<SiteAttributes> = {
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

    return sequelize.define<SiteInstance, SiteAttributes>("Site", attributes, { tableName: 'site', timestamps: false})

}
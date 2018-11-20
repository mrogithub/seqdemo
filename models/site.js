/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('site', {
        site_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        site_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        db_action: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'passive'
        },
        db_action_function: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'now'
        },
        db_action_date_time: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'to_char(now(), YYYY-MM-DD HH24:MI:SS'
        }
    }, {
        tableName: 'site',
        timestamps: false
    });
};

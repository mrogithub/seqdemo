"use strict";
const Entity = require('./EntityClass');
class Dtmf extends Entity {
    constructor(name) {
        super(name);
    }
    findAndCountEntries() {
        this.entity.findAndCountAll().then(function (result) {
            console.log('### findAndCountAll');
            console.log('dtmfs ' + JSON.stringify(result.rows));
            console.log('count:' + result.count);
        });
    }
    findEntriesWithSiteInformation() {
        let options = {
            include: [{ model: require('../models').Site, as: 'site' }]
        };
        return super.getAllEntitiesWithOptions(options);
    }
}
module.exports = Dtmf;

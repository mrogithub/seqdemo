const Model = require('../models');

class Dtmf{

    entity:any;
    entityName:string;

    constructor(name){

        this.entityName = name;
        this.entity = Model[name];
    }

    findAndCountEntries() {

        this.entity.findAndCountAll().then(function (result){
            console.log('### findAndCountAll');
            console.log('dtmfs ' +JSON.stringify(result.rows));
            console.log('count:' +result.count);
        });

    }

}

module.exports = Dtmf;
const Model = require('../models');


class Entity {

    entityName: string;
    entity: any;

    constructor(name: string){

        this.entityName = name;
        this.entity = Model[name];
    }

    getName() {
        return this.entityName;
    }

    getAllEntities(){

        return this.entity.findAll();
    }

    getAllEntitiesWithOptions(options){

        return this.entity.findAll(options);
    }
}

module.exports = Entity;
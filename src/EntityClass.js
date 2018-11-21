var Model = require('../models');
var Entity = /** @class */ (function () {
    function Entity(name) {
        this.entityName = name;
        this.entity = Model[name];
    }
    Entity.prototype.getName = function () {
        return this.entityName;
    };
    Entity.prototype.getAllEntities = function () {
        return this.entity.findAll();
    };
    Entity.prototype.getAllEntitiesWithOptions = function (options) {
        return this.entity.findAll(options);
    };
    return Entity;
}());
module.exports = Entity;

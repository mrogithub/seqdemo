var Model = require('../models');
var Dtmf = /** @class */ (function () {
    function Dtmf(name) {
        this.entityName = name;
        this.entity = Model[name];
    }
    Dtmf.prototype.findAndCountEntries = function () {
        this.entity.findAndCountAll().then(function (result) {
            console.log('### findAndCountAll');
            console.log('dtmfs ' + JSON.stringify(result.rows));
            console.log('count:' + result.count);
        });
    };
    return Dtmf;
}());
module.exports = Dtmf;

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = require('./EntityClass');
var Dtmf = /** @class */ (function (_super) {
    __extends(Dtmf, _super);
    function Dtmf(name) {
        return _super.call(this, name) || this;
    }
    Dtmf.prototype.findAndCountEntries = function () {
        this.entity.findAndCountAll().then(function (result) {
            console.log('### findAndCountAll');
            console.log('dtmfs ' + JSON.stringify(result.rows));
            console.log('count:' + result.count);
        });
    };
    Dtmf.prototype.findEntriesWithSiteInformation = function () {
        var options = {
            include: [{ model: require('../models').Site, as: 'site' }]
        };
        return _super.prototype.getAllEntitiesWithOptions.call(this, options);
    };
    return Dtmf;
}(Entity));
module.exports = Dtmf;

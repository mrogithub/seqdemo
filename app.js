// const Model = require("./models");
//
// console.log('Welcome to seqdemo');
//
//
// Model.Dtmf.findAndCountAll().then(function (result){
//     console.log('### findAndCountAll');
//     console.log('dtmfs ' +JSON.stringify(result.rows));
//     console.log('count:' +result.count);
// });
var Dtmf = require("./src/DtmfClass");
var Site = require("./src/SiteClass");
var dtmf = new Dtmf('Dtmf');
var site = new Site('Site');
//entity.findAndCountEntries();
console.log("Name of entity: " + dtmf.getName());
console.log("Name of entity: " + typeof (dtmf));
// OK
dtmf.getAllEntities().then(function (result) {
    console.log("### getallEntities for " + dtmf.getName());
    console.log(dtmf.getName() + ":  " + JSON.stringify(result));
});
// OK
site.getAllEntities().then(function (result) {
    console.log("### getallEntities for " + site.getName());
    console.log(site.getName() + ":  " + JSON.stringify(result));
});
//
// // OK
// dtmf.findEntriesWithSiteInformation().then( function(result){
//     console.log(`### findEntriesWithSiteInformation for ${dtmf.getName()}`);
//     console.log(`${dtmf.getName()}:  ${JSON.stringify(result)}`);
// });

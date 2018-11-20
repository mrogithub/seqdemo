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
var entity = new Dtmf('Dtmf');
entity.findAndCountEntries();

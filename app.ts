
const Dtmf  = require("./src/DtmfClass");
const Site  = require("./src/SiteClass");


let dtmf   = new Dtmf('Dtmf');
let site   = new Site('Site');

//entity.findAndCountEntries();

console.log(`Name of entity: ${dtmf.getName()}`);
console.log(`Name of entity: ${typeof(dtmf)}`);


// OK
//@ts-ignore
dtmf.getAllEntities().then( (result)=> {
    console.log(`### getallEntities for ${dtmf.getName()}`);
    console.log(`${dtmf.getName()}:  ${JSON.stringify(result)}`);
});

// OK
//@ts-ignore
site.getAllEntities().then((result) => {
    console.log(`### getallEntities for ${site.getName()}`);
    console.log(`${site.getName()}:  ${JSON.stringify(result)}`);
});

//
// OK
//@ts-ignore
dtmf.findEntriesWithSiteInformation().then((result) => {
    console.log(`### findEntriesWithSiteInformation for ${dtmf.getName()}`);
    console.log(`${dtmf.getName()}:  ${JSON.stringify(result)}`);
});


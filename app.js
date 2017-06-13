var fs = require('fs'), 
	http = require('http'), 
	https = require('https'), 
	sqlite3 = require('sqlite3').verbose(), 
	db = new sqlite3.Database('./data/dnd.sqlite'), 
	express = require('express'), 
	app = express();


app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var endpoints = [
    ['/rulebook',                          './rulebook/rulebook'],
	['/rulebook/:rid',                     './rulebook/rulebook/rulebook'],
	['/rulebook/:rid/class',               './rulebook/rulebook/class/class'],
	['/rulebook/:rid/class/:sid',          './rulebook/rulebook/class/class/class'],
	['/rulebook/:rid/feat',                './rulebook/rulebook/feat/feat'],
	['/rulebook/:rid/feat/:sid',           './rulebook/rulebook/feat/feat/feat'],
	['/rulebook/:rid/monster',             './rulebook/rulebook/monster/monster'],
	['/rulebook/:rid/monster/:id',         './rulebook/rulebook/monster/monster/monster'],
	['/rulebook/:rid/race',                './rulebook/rulebook/race/race'],
	['/rulebook/:rid/race/:sid',           './rulebook/rulebook/race/race/race'],
	['/rulebook/:rid/spell',               './rulebook/rulebook/spell/spell'],
	['/rulebook/:rid/spell/:sid',          './rulebook/rulebook/spell/spell/spell'],
    
    ['/edition',                           './edition/edition'],
	['/edition/:sid',                      './edition/edition/edition'],
    
    ['/race',                              './race/race'],
	//['/race/:id',                          './race/race/race'],
    
	['/class',                             './class/class'],
	//['/class/:id',                         './class/class/class'],
	//['/class/:id/skills',                  './class/class/skills/skills'],
    //['/class/:id/spells',                  './class/class/spells/spells'],
    //['/class/:id/prerequisite/feats',      './class/class/prerequisite/feats/feats'],
    //['/class/:id/prerequisite/races',      './class/class/prerequisite/races/races'],
    //['/class/:id/prerequisite/skills',     './class/class/prerequisite/skills/skills'],
    
    ['/feat',                              './feat/feat'],
    //['/feat/:id',                          './feat/feat/feat'],
    //['/feat/:id/categories',               './feat/feat/categories/categories'],
	//['/feat/:id/dependency/feats',         './feat/feat/dependency/feats/feats'],
	//['/feat/:id/prerequisite/feats',       './feat/feat/prerequisite/feats/feats'],
	//['/feat/:id/prerequisite/skills',      './feat/feat/prerequisite/skills/skills'],
	//['/feat/:id/prerequisite/specials',    './feat/feat/prerequisite/specials/specials'],
	//['/feat/:id/related',                  './feat/feat/related/related'],
    
        ['/feat-category',                     './feat-category/feat-category'],
	    ['/feat-category/:sid',                 './feat-category/feat-category/feat-category'],
    
        ['/skill',                             './skill/skill'],
    
        ['/language',                          './language/language'],
	    ['/language/:sid',                      './language/language/language'],
    
        ['/deity',                             './deity/deity'],
	    ['/deity/:sid',                         './deity/deity/deity'],
    
    ['/spell',                             './spell/spell'],
    //['/spell/:id',                         './spell/spell/spell'],
    //['/spell/:id/classes',                 './spell/spell/classes/classes'],
    //['/spell/:id/descriptors',             './spell/spell/descriptors/descriptors'],
    //['/spell/:id/domains',                 './spell/spell/domains/domains'],
    
        ['/spell-descriptor',                  './spell-descriptor/spell-descriptor'],
        ['/spell-descriptor/:sid',              './spell-descriptor/spell-descriptor/spell-descriptor'],
    
        ['/spell-domain',                      './spell-domain/spell-domain'],
	    ['/spell-domain/:sid',                  './spell-domain/spell-domain/spell-domain'],
    
        ['/spell-school',                      './spell-school/spell-school'],
        ['/spell-school/:sid',                  './spell-school/spell-school/spell-school'],
    
        ['/spell-subschool',                   './spell-subschool/spell-subschool'],
        ['/spell-subschool/:sid',               './spell-subschool/spell-subschool/spell-subschool'],
    
    ['/item',                              './item/item'],
	//['/item/:id',                          './item/item/item'],
    
    ['/monster',                           './monster/monster'],
	//['/monster/:sid',                       './monster/monster/monster'],
]

var info = [
    ['default',     '/',            endpoints],
    ['endpoints',   '/endpoints',   endpoints]
]

info.map((controllerName) => {
  controller = require('./routes/' + controllerName[0]);
  controller.setup(app, db, controllerName[1], controllerName[2]);
});


endpoints.map((controllerName) => {
  controller = require('./routes/routes');
  controller.setup(app, db, controllerName[0], controllerName[1]);
});

//var httpsServer = https.createServer({ key  : fs.readFileSync('key.pem'), cert : fs.readFileSync('cert.pem') }, app);
//httpsServer.listen(443);
var httpServer = http.createServer(app);
httpServer.listen(81);
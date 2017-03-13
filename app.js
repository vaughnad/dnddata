var sqlite3 = require('sqlite3').verbose();
	db = new sqlite3.Database('./data/dnd.sqlite'),
	express = require('express'),
	app = express();

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var endpoints = [
	['/class',                             './class/class'],
	['/class/:id',                         './class/class/class'],
	['/class/:id/skills',                  './class/class/skills/skills'],
    ['/class/:id/spells',                  './class/class/spells/spells'],
    ['/class/:id/prerequisite/feats',      './class/class/prerequisite/feats/feats'],
    ['/class/:id/prerequisite/races',      './class/class/prerequisite/races/races'],
    ['/class/:id/prerequisite/skills',     './class/class/prerequisite/skills/skills'],
    ['/deity',                             './deity/deity'],
	['/deity/:id',                         './deity/deity/deity'],
    ['/edition',                           './edition/edition'],
	['/edition/:id',                       './edition/edition/edition'],
    ['/feat',                              './feat/feat'],
    ['/feat/:id',                          './feat/feat/feat'],
    ['/feat/:id/categories',               './feat/feat/categories/categories'],
	['/feat/:id/dependency/feats',         './feat/feat/dependency/feats/feats'],
	['/feat/:id/prerequisite/feats',       './feat/feat/prerequisite/feats/feats'],
	['/feat/:id/prerequisite/skills',      './feat/feat/prerequisite/skills/skills'],
	['/feat/:id/prerequisite/specials',    './feat/feat/prerequisite/specials/specials'],
	['/feat/:id/related',                  './feat/feat/related/related'],
    ['/feat-category',                     './feat-category/feat-category'],
	['/feat-category/:id',                 './feat-category/feat-category/feat-category'],
    ['/feat-category/:id/feats',           './feat-category/feat-category/feats/feats'],
    ['/item',                              './item/item'],
	['/item/:id',                          './item/item/item'],
    ['/language',                          './language/language'],
	['/language/:id',                      './language/language/language'],
    ['/monster',                           './monster/monster'],
	['/monster/:id',                       './monster/monster/monster'],
    ['/race',                              './race/race'],
	['/race/:id',                          './race/race/race'],
    ['/rulebook',                          './rulebook/rulebook'],
	['/rulebook/:id',                      './rulebook/rulebook/rulebook'],
    ['/skill',                             './skill/skill'],
	['/skill/:id',                         './skill/skill/skill'],
    ['/spell',                             './spell/spell'],
    ['/spell/:id',                         './spell/spell/spell'],
    ['/spell/:id/classes',                 './spell/spell/classes/classes'],
    ['/spell/:id/descriptors',             './spell/spell/descriptors/descriptors'],
    ['/spell/:id/domains',                 './spell/spell/domains/domains'],
    ['/spell-descriptor',                  './spell-descriptor/spell-descriptor'],
	['/spell-descriptor/:id',              './spell-descriptor/spell-descriptor/spell-descriptor'],
    ['/spell-descriptor/:id/spells',       './spell-descriptor/spell-descriptor/spells/spells'],
    ['/spell-domain',                      './spell-domain/spell-domain'],
	['/spell-domain/:id',                  './spell-domain/spell-domain/spell-domain'],
    ['/spell-domain/:id/spells',           './spell-domain/spell-domain/spells/spells'],
    ['/spell-school',                      './spell-school/spell-school'],
	['/spell-school/:id',                  './spell-school/spell-school/spell-school'],
    ['/spell-school/:id/spells',           './spell-school/spell-school/spells/spells'],
    ['/spell-subschool',                   './spell-subschool/spell-subschool'],
	['/spell-subschool/:id',               './spell-subschool/spell-subschool/spell-subschool'],
    ['/spell-subschool/:id/spells',        './spell-subschool/spell-subschool/spells/spells']
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

app.listen(80);
module.exports = {
    setup: (app, db, endpoint, endpoints) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var endpoints = [
    			
				{'path':'/rulebook', 'show':'/', 'render':true, 'children':1, 'menu':'Rulebooks', 'alias':'rulebook'},
                {'path':'/rulebook/:rid', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook', 'alias':'rulebook-id'},
                {'path':'/rulebook/:rid/class', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Classes', 'alias':'rulebook-rid-class'},
                {'path':'/rulebook/:rid/class/:sid', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Class', 'alias':'rulebook-rid-class-sid'},
				{'path':'/rulebook/:rid/feat', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Feats', 'alias':'rulebook-rid-feat'},
                {'path':'/rulebook/:rid/feat/:sid', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Feat', 'alias':'rulebook-rid-feat-sid'},
				{'path':'/rulebook/:rid/monster', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Monsters', 'alias':'rulebook-rid-monster'},
                {'path':'/rulebook/:rid/monster/:sid', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Monster', 'alias':'rulebook-rid-monster-sid'},
				{'path':'/rulebook/:rid/race', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Races', 'alias':'rulebook-rid-race'},
                {'path':'/rulebook/:rid/race/:sid', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Race', 'alias':'rulebook-rid-race-sid'},
				{'path':'/rulebook/:rid/spell', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Spells', 'alias':'rulebook-rid-spell'},
                {'path':'/rulebook/:rid/spell/:sid', 'show':'', 'render':true, 'children':0, 'menu':'Rulebook Spell', 'alias':'rulebook-rid-spell-sid'},
				
				{'path':'/edition', 'show':'/rulebook', 'render':true, 'children':0, 'menu':'Editions', 'alias':'edition'},
                {'path':'/edition/:id', 'show':'', 'render':true, 'children':0, 'menu':'Edition', 'alias':'edition-id'},
				
				
				
				{'path':'/race', 'show':'/', 'render':true, 'children':0, 'menu':'Races', 'alias':'race'},
                {'path':'/race/:id', 'show':'', 'render':true, 'children':0, 'menu':'Race', 'alias':'race-id'},
				
				
				
                {'path':'/class', 'show':'/', 'render':true, 'children':0, 'menu':'Classes', 'alias':'class'},
                {'path':'/class/:id', 'show':'', 'render':true, 'children':0, 'menu':'Class', 'alias':'class-id'},
                {'path':'/class/:id/skills', 'show':'', 'render':false, 'children':0, 'menu':'Class skills', 'alias':'class-id-skills'},
                {'path':'/class/:id/spells', 'show':'', 'render':false, 'children':0, 'menu':'Class spells', 'alias':'class-id-spells'},
                {'path':'/class/:id/prerequisite/feats', 'show':'', 'render':false, 'children':0, 'menu':'Class: Prerequisite Feats', 'alias':'class-id-prerequisite-feats'},
                {'path':'/class/:id/prerequisite/races', 'show':'', 'render':false, 'children':0, 'menu':'Class: Prerequisite Feats', 'alias':'class-id-prerequisite-races'},
                {'path':'/class/:id/prerequisite/skills', 'show':'', 'render':false, 'children':0, 'menu':'Class: Prerequisite Feats', 'alias':'class-id-prerequisite-skills'},
				
				
				
				{'path':'/feat', 'show':'/', 'render':true, 'children':1, 'menu':'Feats', 'alias':'feat'},
                {'path':'/feat/:id', 'show':'', 'render':true, 'children':0, 'menu':'Feat', 'alias':'feat-id'},
                {'path':'/feat/:id/categories', 'show':'', 'render':false, 'children':0, 'menu':'Feat categories', 'alias':'feat-id-categories'},
                {'path':'/feat/:id/dependency/feats', 'show':'', 'render':false, 'children':0, 'menu':'Feat: Depedency Feats', 'alias':'feat-id-dependency-feats'},
                {'path':'/feat/:id/prerequisite/feats', 'show':'', 'render':false, 'children':0, 'menu':'Feat: Prerequisite Feats', 'alias':'feat-id-prerequisite-feats'},
                {'path':'/feat/:id/prerequisite/skills', 'show':'', 'render':false, 'children':0, 'menu':'Feat: Prerequisite Skills', 'alias':'feat-id-prerequisite-skills'},
                {'path':'/feat/:id/prerequisite/specials', 'show':'', 'render':false, 'children':0, 'menu':'Feat: Prerequisite Specials', 'alias':'feat-id-prerequisite-specials'},
                {'path':'/feat/:id/related', 'show':'', 'render':false, 'children':0, 'menu':'Related Feats', 'alias':'feat-related'},
				
                {'path':'/feat-category', 'show':'/feat', 'render':true, 'children':0, 'menu':'Feat Categories', 'alias':'feat-category'},
                {'path':'/feat-category/:id', 'show':'', 'render':true, 'children':0, 'menu':'Feat Category', 'alias':'feat-category-id'},
                {'path':'/feat-category/:id/feats', 'show':'', 'render':true, 'children':0, 'menu':'Feat Category Feats', 'alias':'feat-category-id-feats'},
				
				
				
				{'path':'/skill', 'show':'/', 'render':true, 'children':0, 'menu':'Skills', 'alias':'skill'},
                {'path':'/skill/:id', 'show':'', 'render':true, 'children':0, 'menu':'Skill', 'alias':'skill-id'},
				
				
				
				{'path':'/language', 'show':'/', 'render':true, 'children':0, 'menu':'Languages', 'alias':'language'},
                {'path':'/language/:id', 'show':'', 'render':true, 'children':0, 'menu':'Language', 'alias':'language-id'},
				
				
				
                {'path':'/deity', 'show':'/', 'render':true, 'children':0, 'menu':'Deities', 'alias':'deity'},
                {'path':'/deity/:id', 'show':'', 'render':true, 'children':0, 'menu':'Deity', 'alias':'deity-id'},
				
				
				
				{'path':'/spell', 'show':'/', 'render':true, 'children':4, 'menu':'Spells', 'alias':'spell'},
                {'path':'/spell/:id', 'show':'', 'render':true, 'children':0, 'menu':'Spell', 'alias':'spell-id'},
                {'path':'/spell/:id/classes', 'show':'', 'render':false, 'children':0, 'menu':'Spell: Classes', 'alias':'spell-id-classes'},
                {'path':'/spell/:id/descriptors', 'show':'', 'render':false, 'children':0, 'menu':'Spell: Descriptors', 'alias':'spell-id-descriptors'},
                {'path':'/spell/:id/domains', 'show':'', 'render':false, 'children':0, 'menu':'Spell: Domains', 'alias':'spell-id-domains'},
				
                {'path':'/spell-descriptor', 'show':'/spell', 'render':true, 'children':0, 'menu':'Spell Descriptors', 'alias':'spell-descriptor'},
                {'path':'/spell-descriptor/:id', 'show':'', 'render':true, 'children':0, 'menu':'Spell Descriptor', 'alias':'spell-descriptor-id'},
                {'path':'/spell-descriptor/:id/spells', 'show':'', 'render':true, 'children':0, 'menu':'Spell Descriptor Spells', 'alias':'spell-descriptor-id-spells'},
				
                {'path':'/spell-domain', 'show':'/spell', 'render':true, 'children':0, 'menu':'Spell Domains', 'alias':'spell-domain'},
                {'path':'/spell-domain/:id', 'show':'', 'render':true, 'children':0, 'menu':'Spell Domain', 'alias':'spell-domain-id'},
                {'path':'/spell-domain/:id/spells', 'show':'', 'render':true, 'children':0, 'menu':'Spell Domain Spells', 'alias':'spell-domain-id-spells'},
				
                {'path':'/spell-school', 'show':'/spell', 'render':true, 'children':0, 'menu':'Spell Schools', 'alias':'spell-school'},
                {'path':'/spell-school/:id', 'show':'', 'render':true, 'children':0, 'menu':'Spell School', 'alias':'spell-school-id'},
                {'path':'/spell-school/:id/spells', 'show':'', 'render':true, 'children':0, 'menu':'Spell School Spells', 'alias':'spell-school-id-spells'},
				
                {'path':'/spell-subschool', 'show':'/spell', 'render':true, 'children':0, 'menu':'Spell Subschools', 'alias':'spell-subschool'},
                {'path':'/spell-subschool/:id', 'show':'', 'render':true, 'children':0, 'menu':'Spell Subschool', 'alias':'spell-subschool-id'},
                {'path':'/spell-subschool/:id/spells', 'show':'', 'render':true, 'children':0, 'menu':'Spell Subschool Spells', 'alias':'spell-subschool-id-spells'},
				
				
				
                {'path':'/item', 'show':'/', 'render':true, 'children':0, 'menu':'Items', 'alias':'item'},
                {'path':'/item/:id', 'show':'', 'render':true, 'children':0, 'menu':'Item', 'alias':'item-id'},
				
                
				
                {'path':'/monster', 'show':'/', 'render':true, 'children':0, 'menu':'Monsters', 'alias':'monster'},
                {'path':'/monster/:id', 'show':'', 'render':true, 'children':0, 'menu':'Monster', 'alias':'monster-id'},
				
            ]
			
			res.json(endpoints);
        });
    }
}
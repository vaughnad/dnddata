module.exports = {
    setup: (app, db, endpoint, endpoints) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var endpoints = [
    			
				{'path':'/rulebook', 'show':'/', 'render':true, 'children':true, 'menu':'Rulebooks', 'alias':'rulebook'},
                {'path':'/rulebook/:id', 'show':'', 'render':true, 'children':false, 'menu':'Rulebook', 'alias':'rulebook-id'},
				
				{'path':'/edition', 'show':'/rulebook', 'render':true, 'children':false, 'menu':'Editions', 'alias':'edition'},
                {'path':'/edition/:id', 'show':'', 'render':true, 'children':false, 'menu':'Edition', 'alias':'edition-id'},
				
				
				
				{'path':'/race', 'show':'/', 'render':true, 'children':false, 'menu':'Races', 'alias':'race'},
                {'path':'/race/:id', 'show':'', 'render':true, 'children':false, 'menu':'Race', 'alias':'race-id'},
				
				
				
                {'path':'/class', 'show':'/', 'render':true, 'children':false, 'menu':'Classes', 'alias':'class'},
                {'path':'/class/:id', 'show':'', 'render':true, 'children':false, 'menu':'Class', 'alias':'class-id'},
                {'path':'/class/:id/skills', 'show':'', 'render':false, 'children':false, 'menu':'Class skills', 'alias':'class-id-skills'},
                {'path':'/class/:id/spells', 'show':'', 'render':false, 'children':false, 'menu':'Class spells', 'alias':'class-id-spells'},
                {'path':'/class/:id/prerequisite/feats', 'show':'', 'render':false, 'children':false, 'menu':'Class: Prerequisite Feats', 'alias':'class-id-prerequisite-feats'},
                {'path':'/class/:id/prerequisite/races', 'show':'', 'render':false, 'children':false, 'menu':'Class: Prerequisite Feats', 'alias':'class-id-prerequisite-races'},
                {'path':'/class/:id/prerequisite/skills', 'show':'', 'render':false, 'children':false, 'menu':'Class: Prerequisite Feats', 'alias':'class-id-prerequisite-skills'},
				
				
				
				{'path':'/feat', 'show':'/', 'render':true, 'children':true, 'menu':'Feats', 'alias':'feat'},
                {'path':'/feat/:id', 'show':'', 'render':true, 'children':false, 'menu':'Feat', 'alias':'feat-id'},
                {'path':'/feat/:id/categories', 'show':'', 'render':false, 'children':false, 'menu':'Feat categories', 'alias':'feat-id-categories'},
                {'path':'/feat/:id/dependency/feats', 'show':'', 'render':false, 'children':false, 'menu':'Feat: Depedency Feats', 'alias':'feat-id-dependency-feats'},
                {'path':'/feat/:id/prerequisite/feats', 'show':'', 'render':false, 'children':false, 'menu':'Feat: Prerequisite Feats', 'alias':'feat-id-prerequisite-feats'},
                {'path':'/feat/:id/prerequisite/skills', 'show':'', 'render':false, 'children':false, 'menu':'Feat: Prerequisite Skills', 'alias':'feat-id-prerequisite-skills'},
                {'path':'/feat/:id/prerequisite/specials', 'show':'', 'render':false, 'children':false, 'menu':'Feat: Prerequisite Specials', 'alias':'feat-id-prerequisite-specials'},
                {'path':'/feat/:id/related', 'show':'', 'render':false, 'children':false, 'menu':'Related Feats', 'alias':'feat-related'},
				
                {'path':'/feat-category', 'show':'/feat', 'render':true, 'children':false, 'menu':'Feat Categories', 'alias':'feat-category'},
                {'path':'/feat-category/:id', 'show':'', 'render':true, 'children':false, 'menu':'Feat Category', 'alias':'feat-category-id'},
                {'path':'/feat-category/:id/feats', 'show':'', 'render':true, 'children':false, 'menu':'Feat Category Feats', 'alias':'feat-category-id-feats'},
				
				
				
				{'path':'/skill', 'show':'/', 'render':true, 'children':false, 'menu':'Skills', 'alias':'skill'},
                {'path':'/skill/:id', 'show':'', 'render':true, 'children':false, 'menu':'Skill', 'alias':'skill-id'},
				
				
				
				{'path':'/language', 'show':'/', 'render':true, 'children':false, 'menu':'Languages', 'alias':'language'},
                {'path':'/language/:id', 'show':'', 'render':true, 'children':false, 'menu':'Language', 'alias':'language-id'},
				
				
				
                {'path':'/deity', 'show':'/', 'render':true, 'children':false, 'menu':'Deities', 'alias':'deity'},
                {'path':'/deity/:id', 'show':'', 'render':true, 'children':false, 'menu':'Deity', 'alias':'deity-id'},
				
				
				
				{'path':'/spell', 'show':'/', 'render':true, 'children':true, 'menu':'Spells', 'alias':'spell'},
                {'path':'/spell/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell', 'alias':'spell-id'},
                {'path':'/spell/:id/classes', 'show':'', 'render':false, 'children':false, 'menu':'Spell: Classes', 'alias':'spell-id-classes'},
                {'path':'/spell/:id/descriptors', 'show':'', 'render':false, 'children':false, 'menu':'Spell: Descriptors', 'alias':'spell-id-descriptors'},
                {'path':'/spell/:id/domains', 'show':'', 'render':false, 'children':false, 'menu':'Spell: Domains', 'alias':'spell-id-domains'},
				
                {'path':'/spell-descriptor', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Descriptors', 'alias':'spell-descriptor'},
                {'path':'/spell-descriptor/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell Descriptor', 'alias':'spell-descriptor-id'},
                {'path':'/spell-descriptor/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell Descriptor Spells', 'alias':'spell-descriptor-id-spells'},
				
                {'path':'/spell-domain', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Domains', 'alias':'spell-domain'},
                {'path':'/spell-domain/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell Domain', 'alias':'spell-domain-id'},
                {'path':'/spell-domain/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell Domain Spells', 'alias':'spell-domain-id-spells'},
				
                {'path':'/spell-school', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Schools', 'alias':'spell-domain'},
                {'path':'/spell-school/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell School', 'alias':'spell-school-id'},
                {'path':'/spell-school/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell School Spells', 'alias':'spell-school-id-spells'},
				
                {'path':'/spell-subschool', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Subschools', 'alias':'spell-domain'},
                {'path':'/spell-subschool/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell Subschool', 'alias':'spell-subschool-id'},
                {'path':'/spell-subschool/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell Subschool Spells', 'alias':'spell-subschool-id-spells'},
				
				
				
                {'path':'/item', 'show':'/', 'render':true, 'children':false, 'menu':'Items', 'alias':'item'},
                {'path':'/item/:id', 'show':'', 'render':true, 'children':false, 'menu':'Item', 'alias':'item-id'},
				
                
				
                {'path':'/monster', 'show':'/', 'render':true, 'children':false, 'menu':'Monsters', 'alias':'monster'},
                {'path':'/monster/:id', 'show':'', 'render':true, 'children':false, 'menu':'Monster', 'alias':'monster-id'},
				
            ]
			
			res.json(endpoints);
        });
    }
}
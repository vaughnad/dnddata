module.exports = {
    setup: (app, db, endpoint, endpoints) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var endpoints = [
    			
				{'path':'/rulebook', 'show':'/', 'render':true, 'children':true, 'menu':'Rulebooks'},
                {'path':'/rulebook/:id', 'show':'', 'render':true, 'children':false, 'menu':'Rulebook'},
				
				{'path':'/edition', 'show':'/rulebook', 'render':true, 'children':false, 'menu':'Editions'},
                {'path':'/edition/:id', 'show':'', 'render':true, 'children':false, 'menu':'Edition'},
				
				
				
				{'path':'/race', 'show':'/', 'render':true, 'children':false, 'menu':'Races'},
                {'path':'/race/:id', 'show':'', 'render':true, 'children':false, 'menu':'Race'},
				
				
				
                {'path':'/class', 'show':'/', 'render':true, 'children':false, 'menu':'Classes'},
                {'path':'/class/:id', 'show':'', 'render':true, 'children':false, 'menu':'Class'},
                {'path':'/class/:id/skills', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/spells', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/prerequisite/feats', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/prerequisite/races', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/prerequisite/skills', 'show':'', 'render':false, 'children':false, 'menu':''},
				
				
				
				{'path':'/feat', 'show':'/', 'render':true, 'children':true, 'menu':'Feats'},
                {'path':'/feat/:id', 'show':'', 'render':true, 'children':false, 'menu':'Feat'},
                {'path':'/feat/:id/categories', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/dependency/feats', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/prerequisite/feats', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/prerequisite/skills', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/prerequisite/specials', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/related', 'show':'', 'render':false, 'children':false, 'menu':''},
				
                {'path':'/feat-category', 'show':'/feat', 'render':true, 'children':false, 'menu':'Feat Categories'},
                {'path':'/feat-category/:id', 'show':'', 'render':true, 'children':false, 'menu':'Feat Category'},
                {'path':'/feat-category/:id/feats', 'show':'', 'render':true, 'children':false, 'menu':'Feat Category Feats'},
				
				
				
				{'path':'/skill', 'show':'/', 'render':true, 'children':false, 'menu':'Skills'},
                {'path':'/skill/:id', 'show':'', 'render':true, 'children':false, 'menu':'Skill'},
				
				
				
				{'path':'/language', 'show':'/', 'render':true, 'children':false, 'menu':'Languages'},
                {'path':'/language/:id', 'show':'', 'render':true, 'children':false, 'menu':'Language'},
				
				
				
                {'path':'/deity', 'show':'/', 'render':true, 'children':false, 'menu':'Deities'},
                {'path':'/deity/:id', 'show':'', 'render':true, 'children':false, 'menu':'Deity'},
				
				
				
				{'path':'/spell', 'show':'/', 'render':true, 'children':true, 'menu':'Spells'},
                {'path':'/spell/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/spell/:id/classes', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/spell/:id/descriptors', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/spell/:id/domains', 'show':'', 'render':false, 'children':false, 'menu':''},
				
                {'path':'/spell-descriptor', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Descriptors'},
                {'path':'/spell-descriptor/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell Descriptor'},
                {'path':'/spell-descriptor/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell Descriptor Spells'},
				
                {'path':'/spell-domain', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Domains'},
                {'path':'/spell-domain/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell Domain'},
                {'path':'/spell-domain/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell Domain Spells'},
				
                {'path':'/spell-school', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Schools'},
                {'path':'/spell-school/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell School'},
                {'path':'/spell-school/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell School Spells'},
				
                {'path':'/spell-subschool', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Subschools'},
                {'path':'/spell-subschool/:id', 'show':'', 'render':true, 'children':false, 'menu':'Spell Subschool'},
                {'path':'/spell-subschool/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':'Spell Subschools'},
				
				
				
                {'path':'/item', 'show':'/', 'render':true, 'children':false, 'menu':'Items'},
                {'path':'/item/:id', 'show':'', 'render':true, 'children':false, 'menu':'Item'},
				
                
				
                {'path':'/monster', 'show':'/', 'render':true, 'children':false, 'menu':'Monsters'},
                {'path':'/monster/:id', 'show':'', 'render':true, 'children':false, 'menu':'Monster'},
				
            ]
			
			res.json(endpoints);
        });
    }
}
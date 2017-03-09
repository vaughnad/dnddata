module.exports = {
    setup: (app, db, endpoint, endpoints) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var endpoints = [
    			
				{'path':'/rulebook', 'show':'/', 'render':true, 'children':true, 'menu':'Rulebooks'},
                {'path':'/rulebook/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				{'path':'/edition', 'show':'/rulebook', 'render':true, 'children':false, 'menu':'Editions'},
                {'path':'/edition/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
				{'path':'/race', 'show':'/', 'render':true, 'children':false, 'menu':'Races'},
                {'path':'/race/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
                {'path':'/class', 'show':'/', 'render':true, 'children':false, 'menu':'Classes'},
                {'path':'/class/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/class/:id/skills', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/spells', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/prerequisite/feats', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/prerequisite/races', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/class/:id/prerequisite/skills', 'show':'', 'render':false, 'children':false, 'menu':''},
				
				
				
				{'path':'/feat', 'show':'/', 'render':true, 'children':true, 'menu':'Feats'},
                {'path':'/feat/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/feat/:id/categories', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/dependency/feats', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/prerequisite/feats', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/prerequisite/skills', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/prerequisite/specials', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/feat/:id/related', 'show':'', 'render':false, 'children':false, 'menu':''},
				
                {'path':'/feat-category', 'show':'/feat', 'render':true, 'children':false, 'menu':'Feat Categories'},
                {'path':'/feat-category/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/feat-category/:id/feats', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
				{'path':'/skill', 'show':'/', 'render':true, 'children':false, 'menu':'Skills'},
                {'path':'/skill/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
				{'path':'/language', 'show':'/', 'render':true, 'children':false, 'menu':'Languages'},
                {'path':'/language/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
                {'path':'/deity', 'show':'/', 'render':true, 'children':false, 'menu':'Deities'},
                {'path':'/deity/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
				{'path':'/spell', 'show':'/', 'render':true, 'children':true, 'menu':'Spells'},
                {'path':'/spell/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/spell/:id/classes', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/spell/:id/descriptors', 'show':'', 'render':false, 'children':false, 'menu':''},
                {'path':'/spell/:id/domains', 'show':'', 'render':false, 'children':false, 'menu':''},
				
                {'path':'/spell-descriptor', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Descriptors'},
                {'path':'/spell-descriptor/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/spell-descriptor/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':''},
				
                {'path':'/spell-domain', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Domains'},
                {'path':'/spell-domain/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/spell-domain/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':''},
				
                {'path':'/spell-school', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Schools'},
                {'path':'/spell-school/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/spell-school/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':''},
				
                {'path':'/spell-subschool', 'show':'/spell', 'render':true, 'children':false, 'menu':'Spell Subschools'},
                {'path':'/spell-subschool/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
                {'path':'/spell-subschool/:id/spells', 'show':'', 'render':true, 'children':false, 'menu':''},
				
				
				
                {'path':'/item', 'show':'/', 'render':true, 'children':false, 'menu':'Items'},
                {'path':'/item/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
                
				
                {'path':'/monster', 'show':'/', 'render':true, 'children':false, 'menu':'Monsters'},
                {'path':'/monster/:id', 'show':'', 'render':true, 'children':false, 'menu':''},
				
            ]
			
			res.json(endpoints);
        });
    }
}
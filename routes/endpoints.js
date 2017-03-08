module.exports = {
    setup: (app, db, endpoint, endpoints) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var endpoints = [
    
                {'path':'/class', 'show':'/'},
                {'path':'/class/:id', 'show':''},
                {'path':'/class/:id/skills', 'show':''},
                {'path':'/class/:id/spells', 'show':''},
                {'path':'/class/:id/prerequisite/feats', 'show':''},
                {'path':'/class/:id/prerequisite/races', 'show':''},
                {'path':'/class/:id/prerequisite/skills', 'show':''},

                {'path':'/deity', 'show':'/'},
                {'path':'/deity/:id', 'show':''},

                {'path':'/edition', 'show':'/'},
                {'path':'/edition/:id', 'show':''},

                {'path':'/feat', 'show':'/'},
                {'path':'/feat/:id', 'show':''},
                {'path':'/feat/:id/categories', 'show':''},
                {'path':'/feat/:id/dependency/feats', 'show':''},
                {'path':'/feat/:id/prerequisite/feats', 'show':''},
                {'path':'/feat/:id/prerequisite/skills', 'show':''},
                {'path':'/feat/:id/prerequisite/specials', 'show':''},
                {'path':'/feat/:id/related', 'show':''},

                {'path':'/feat-category', 'show':'/feat'},
                {'path':'/feat-category/:id', 'show':''},
                {'path':'/feat-category/:id/feats', 'show':''},

                {'path':'/item', 'show':'/'},
                {'path':'/item/:id', 'show':''},

                {'path':'/language', 'show':'/'},
                {'path':'/language/:id', 'show':''},

                {'path':'/monster', 'show':'/'},
                {'path':'/monster/:id', 'show':''},

                {'path':'/race', 'show':'/'},
                {'path':'/race/:id', 'show':''},

                {'path':'/rulebook', 'show':'/'},
                {'path':'/rulebook/:id', 'show':''},

                {'path':'/skill', 'show':'/'},
                {'path':'/skill/:id', 'show':''},

                {'path':'/spell', 'show':'/'},
                {'path':'/spell/:id', 'show':''},
                {'path':'/spell/:id/classes', 'show':''},
                {'path':'/spell/:id/descriptors', 'show':''},
                {'path':'/spell/:id/domains', 'show':''},

                {'path':'/spell-descriptor', 'show':'/spell'},
                {'path':'/spell-descriptor/:id', 'show':''},
                {'path':'/spell-descriptor/:id/spells', 'show':''},

                {'path':'/spell-domain', 'show':'/spell'},
                {'path':'/spell-domain/:id', 'show':''},
                {'path':'/spell-domain/:id/spells', 'show':''},

                {'path':'/spell-school', 'show':'/spell'},
                {'path':'/spell-school/:id', 'show':''},
                {'path':'/spell-school/:id/spells', 'show':''},

                {'path':'/spell-subschool', 'show':'/spell'},
                {'path':'/spell-subschool/:id', 'show':''},
                {'path':'/spell-subschool/:id/spells', 'show':''}

            ]
			
			res.json(endpoints);
        });
    }
}
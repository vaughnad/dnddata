var endpoint = "/endpoints";


module.exports = {
    setup: (app, db, sqlHelper) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var result = [
				{"alias": "class", "route":"class/class", "guid": true, "relation": "classes"},
				{"alias": "classdependencyfeats", "route":"class/classdependencyfeats", "guid": true, "relation": "class"},
				{"alias": "classdependencyraces", "route":"class/classdependencyraces", "guid": true, "relation": "class"},
				{"alias": "classdependencyskills", "route":"class/classdependencyskills", "guid": true, "relation": "class"},
				{"alias": "classskills", "route":"class/classskills", "guid": true, "relation": "class"},
				{"alias": "classspells", "route":"class/classspells", "guid": true, "relation": "class"},
				{"alias": "classes", "route":"classes/classes", "guid": false, "relation": ""},
				{"alias": "deities", "route":"deities/deities", "guid": null, "relation": ""},
				{"alias": "feat", "route":"feat/feat", "guid": true, "relation": "feats"},
				{"alias": "featcategories", "route":"feat/featcategories", "guid": true, "relation": "feat"},
				{"alias": "featdependencyfeats", "route":"feat/featdependencyfeats", "guid": true, "relation": "feat"},
				{"alias": "featprerequisitefeats", "route":"feat/featprerequisitefeats", "guid": true, "relation": "feat"},
				{"alias": "featprerequisiteskills", "route":"feat/featprerequisiteskills", "guid": true, "relation": "feat"},
				{"alias": "featrelatedfeats", "route":"feat/featrelatedfeats", "guid": true, "relation": "feat"},
				{"alias": "featrequirementsspecial", "route":"feat/featrequirementsspecial", "guid": true, "relation": "feat"},
				{"alias": "feats", "route":"feats/feats", "guid": false, "relation": ""},
				{"alias": "fetcategories", "route":"feats/fetcategories", "guid": false, "relation": ""},
				{"alias": "featcategoryfeats", "route":"feats/featcategoryfeats", "guid": true, "relation": "fetcategories"},
				{"alias": "items", "route":"items/items", "guid": null, "relation": ""},
				{"alias": "languages", "route":"languages/languages", "guid": null, "relation": ""},
				{"alias": "monsters", "route":"monsters/monsters", "guid": null, "relation": ""},
				{"alias": "race", "route":"races/race", "guid": true, "relation": "races"},
				{"alias": "races", "route":"races/races", "guid": false, "relation": ""},
				{"alias": "rulebooks", "route":"rulebook/rulebooks", "guid": null, "relation": ""},
				{"alias": "skill", "route":"skills/skill", "guid": true, "relation": "skills"},
				{"alias": "skills", "route":"skills/skills", "guid": false, "relation": ""},
				{"alias": "skilltricks", "route":"skills/skilltricks", "guid": false, "relation": ""},
				{"alias": "spell", "route":"spell/spell", "guid": true, "relation": "spells"},
				{"alias": "spellclasses", "route":"spell/spellclasses", "guid": true, "relation": "spell"},
				{"alias": "spelldescriptors", "route":"spell/spelldescriptors", "guid": true, "relation": "spell"},
				{"alias": "spelldomains", "route":"spell/spelldomains", "guid": true, "relation": "spell"},
				{"alias": "spells", "route":"spells/spells", "guid": false, "relation": ""},
				{"alias": "spelldescriptors", "route":"spells/spelldescriptors", "guid": false, "relation": ""},
				{"alias": "spelldescriptorspells", "route":"spells/spelldescriptorspells", "guid": true, "relation": "spelldescriptors"},
				{"alias": "spelldomains", "route":"spells/spelldomains", "guid": false, "relation": ""},
				{"alias": "spelldomainspells", "route":"spells/spelldomainspells", "guid": true, "relation": "spelldomains"},
				{"alias": "spellschools", "route":"spells/spellschools", "guid": false, "relation": ""},
				{"alias": "spellschoolspells", "route":"spells/spellschoolspells", "guid": true, "relation": "spellschools"},
				{"alias": "spellsubschools", "route":"spells/spellsubschools", "guid": false, "relation": ""},
				{"alias": "spellsubschoolspells", "route":"spells/spellsubschoolspells", "guid": true, "relation": "spellsubschools"}];
			res.json(result);
        });
    }
}
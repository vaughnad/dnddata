module.exports = {
    setup: (app, db, endpoint) => {
        /* CHARACTERCLASS ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
			/*
            var result = [
				{"alias": "class", "path":"class", "guid": true, "relation": "classes", "related": "class"},
				{"alias": "classdependencyfeats", "path":"class/dependency/feats", "guid": true, "relation": "class", "related": "feats"},
				{"alias": "classdependencyraces", "path":"class/dependency/races", "guid": true, "relation": "class", "related": "races"},
				{"alias": "classdependencyskills", "path":"class/dependency/skills", "guid": true, "relation": "class", "related": "skills"},
				{"alias": "classskills", "path":"class/skills", "guid": true, "relation": "class", "related": "skill"},
				{"alias": "classspells", "path":"class/spells", "guid": true, "relation": "class", "related": "spell"},
				{"alias": "classes", "path":"classes", "guid": false, "relation": "", "related": "class"},
				{"alias": "deities", "path":"deities", "guid": null, "relation": "", "related": "deity"},
                {"alias": "editions", "path":"editions", "guid": null, "relation": "", "related": "edition"},
				{"alias": "feat", "path":"feat", "guid": true, "relation": "feats", "related": "feat"},
				{"alias": "featcategories", "path":"feat/categories", "guid": true, "relation": "feat", "related": "feat/category"},
				{"alias": "featdependencyfeats", "path":"feat/dependency/feats", "guid": true, "relation": "feat", "related": "feat"},
				{"alias": "featprerequisitefeats", "path":"feat/prerequisite/feats", "guid": true, "relation": "feat", "related": "feat"},
				{"alias": "featprerequisiteskills", "path":"feat/prerequisite/skills", "guid": true, "relation": "feat", "related": "skill"},
				{"alias": "featrelatedfeats", "path":"feat/related/feats", "guid": true, "relation": "feat", "related": "feat"},
				{"alias": "featrequirementsspecial", "path":"feat/requirements/special", "guid": true, "relation": "feat", "related": "special"},
				{"alias": "feats", "path":"feats", "guid": false, "relation": "", "related": "feat"},
				{"alias": "featcategories", "path":"feats/categories", "guid": false, "relation": "", "related": "feat/category"},
				{"alias": "featcategoryfeats", "path":"feats/categories/feats", "guid": true, "relation": "fetcategories", "related": "feat"},
				{"alias": "items", "path":"items", "guid": null, "relation": "", "related": "item"},
				{"alias": "languages", "path":"languages", "guid": null, "relation": "", "related": "language"},
				{"alias": "monsters", "path":"monsters", "guid": null, "relation": "", "related": "monster"},
				{"alias": "race", "path":"race", "guid": true, "relation": "races", "related": "race"},
				{"alias": "races", "path":"races", "guid": false, "relation": "", "related": "race"},
				{"alias": "rulebooks", "path":"rulebooks", "guid": null, "relation": "", "related": "rulebook"},
				{"alias": "skill", "path":"skill", "guid": true, "relation": "skills", "related": "skill"},
				{"alias": "skills", "path":"skills", "guid": false, "relation": "", "related": "skill"},
				{"alias": "skilltricks", "path":"skills/tricks", "guid": false, "relation": "feats", "related": "feat"},
				{"alias": "spell", "path":"spell", "guid": true, "relation": "spells", "related": "spell"},
				{"alias": "spellclasses", "path":"spell/classes", "guid": true, "relation": "spell", "related": "class"},
				{"alias": "spelldescriptors", "path":"spell/descriptors", "guid": true, "relation": "spell", "related": "spell/descriptor"},
				{"alias": "spelldomains", "path":"spell/domains", "guid": true, "relation": "spell", "related": " spell/domain"},
				{"alias": "spells", "path":"spells", "guid": false, "relation": "", "related": "spell"},
				{"alias": "spelldescriptors", "path":"spells/descriptors", "guid": false, "relation": "", "related": "spell/descriptor"},
				{"alias": "spelldescriptorspells", "path":"spells/descriptors/spells", "guid": true, "relation": "spelldescriptors", "related": "spell"},
				{"alias": "spelldomains", "path":"spells/domains", "guid": false, "relation": "", "related": "spell/domain"},
				{"alias": "spelldomainspells", "path":"spells/domains/spells", "guid": true, "relation": "spelldomains", "related": "spell"},
				{"alias": "spellschools", "path":"spells/schools", "guid": false, "relation": "", "related": "spell/school"},
				{"alias": "spellschoolspells", "path":"spells/schools/spells", "guid": true, "relation": "spellschools", "related": "spell"},
				{"alias": "spellsubschools", "path":"spells/subschools", "guid": false, "relation": "", "related": "spell/subschool"},
				{"alias": "spellsubschoolspells", "path":"spells/subschools/spells", "guid": true, "relation": "spellsubschools", "related": "spell"}];
			res.json(result);
			*/
        });
    }
}
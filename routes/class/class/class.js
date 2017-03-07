module.exports = {
    setup: (app, db, endpoint) => {
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var result = [];
            
            var sql = `SELECT dnd_characterclassvariant.id AS guid, dnd_characterclassvariant.*, dnd_characterclass.*, dnd_rulebook.id AS rulebook_id, dnd_rulebook.name AS rulebook_name, dnd_rulebook.slug AS rulebook_slug, dnd_dndedition.id AS edition_id, dnd_dndedition.name AS edition_name, dnd_dndedition.slug AS edition_slug 
            FROM dnd_characterclassvariant 
			LEFT OUTER JOIN dnd_characterclass ON dnd_characterclassvariant.character_class_id = dnd_characterclass.id 
			LEFT OUTER JOIN dnd_rulebook ON dnd_characterclassvariant.rulebook_id = dnd_rulebook.id
			LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id`;

			sql += " WHERE guid = '" + req.params.id + "'";
			
            db.serialize(() => {
                db.each(sql, function(err, row) {
                    result.push(row);
                }, () => {
                    res.json(result);
                });
            });
        });
    }
}
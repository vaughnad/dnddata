module.exports = {
    setup: (app, db, endpoint) => {
        /* SPELL ENDPOINT */
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var result = [];
            
            var sql = `SELECT dnd_characterclassvariant_class_skills.characterclassvariant_id AS guid, * FROM dnd_characterclassvariant_class_skills
            LEFT OUTER JOIN dnd_skill ON dnd_skill.id = dnd_characterclassvariant_class_skills.skill_id`;

            sql += " WHERE guid = " + req.params.id + "";
			
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
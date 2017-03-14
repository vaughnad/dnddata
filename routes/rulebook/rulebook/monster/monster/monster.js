module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_monster.id AS itemid, 
        dnd_monster.*, 
        dnd_racesize.name AS size_name,
		dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug

        FROM dnd_monster

        LEFT OUTER JOIN dnd_racesize ON dnd_monster.size_id = dnd_racesize.id
		LEFT OUTER JOIN dnd_rulebook ON dnd_monster.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;
        
        // WHERE
		sql += " WHERE dnd_rulebook.slug = '" + req.params.id + "'";
		sql += " AND dnd_monster.slug = '" + req.params.sid + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
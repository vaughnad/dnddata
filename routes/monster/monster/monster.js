module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_monster.id AS itemid, 
        dnd_monster.*, 
        dnd_racesize.name AS size_name,
		dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_monster

        LEFT OUTER JOIN dnd_racesize ON dnd_monster.size_id = dnd_racesize.id
		LEFT OUTER JOIN dnd_rulebook ON dnd_monster.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
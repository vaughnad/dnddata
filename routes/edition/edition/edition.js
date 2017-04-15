module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_dndedition.slug AS itemid, 
        dnd_rulebook.id, 
        dnd_rulebook.name, 
        dnd_rulebook.slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug 
        
        FROM dnd_rulebook
        
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.sid + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
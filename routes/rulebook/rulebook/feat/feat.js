module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_feat.id AS itemid, 
        dnd_feat.name, 
        dnd_feat.slug, 
        dnd_feat.description, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_feat

        LEFT OUTER JOIN dnd_rulebook ON dnd_feat.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        sql += " WHERE dnd_rulebook.slug = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_feat.name ASC";
        
        return sql;
    }
}
module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_feat.id AS itemid, 
        dnd_feat.name, 
        dnd_feat.slug, 
        dnd_feat.description, 
        dnd_feat.description_html,
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug

        FROM dnd_feat

        LEFT OUTER JOIN dnd_rulebook ON dnd_feat.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_characterclassvariantrequiresfeat.character_class_variant_id AS itemid, 
        dnd_characterclassvariantrequiresfeat.*, 
        dnd_feat.id AS feat_id, 
        dnd_feat.name AS feat_name, 
        dnd_feat.slug AS feat_slug, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug 

        FROM dnd_characterclassvariantrequiresfeat

        LEFT OUTER JOIN dnd_feat ON dnd_characterclassvariantrequiresfeat.feat_id = dnd_feat.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_feat.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;

        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_feat.name ASC";
        
        return sql;
    }
}
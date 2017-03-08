module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_characterclassvariantrequiresrace.character_class_variant_id AS itemid, 
        dnd_characterclassvariantrequiresrace.*, 
        dnd_race.id AS race_id, 
        dnd_race.name AS race_name, 
        dnd_race.slug AS race_slug, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug 

        FROM dnd_characterclassvariantrequiresrace

        LEFT OUTER JOIN dnd_race ON dnd_characterclassvariantrequiresrace.race_id = dnd_race.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_race.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;

        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_race.name ASC";
        
        return sql;
    }
}
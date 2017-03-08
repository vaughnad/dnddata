module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_race.id AS itemid, 
        dnd_race.name, 
        dnd_race.slug AS slug, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug 

        FROM dnd_race

        LEFT OUTER JOIN dnd_racetype ON dnd_race.race_type_id = dnd_racetype.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_race.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_race.name ASC";
        
        return sql;
    }
}
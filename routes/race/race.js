module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_race.id AS itemid, 
        dnd_race.name, 
        dnd_race.slug AS slug, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_race

        LEFT OUTER JOIN dnd_racetype ON dnd_race.race_type_id = dnd_racetype.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_race.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_race.name ASC";
        
        return sql;
    }
}
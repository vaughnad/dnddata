module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_characterclassvariant.id AS itemid, 
        dnd_characterclass.name, 
        dnd_characterclass.slug, 
        dnd_characterclass.prestige, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name,
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_characterclassvariant 

        LEFT OUTER JOIN dnd_characterclass ON dnd_characterclassvariant.character_class_id = dnd_characterclass.id 
        LEFT OUTER JOIN dnd_rulebook ON dnd_characterclassvariant.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        sql += " WHERE dnd_rulebook.slug = '" + req.params.rid + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_characterclass.name ASC";
        
        return sql;
    }
}
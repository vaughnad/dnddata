module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spellschool.slug AS itemid, 
        dnd_spell.id, 
        dnd_spell.name, 
        dnd_spell.slug, 
        dnd_spellschool.id AS spellschool_id, 
        dnd_spellschool.name AS spellschool_name, 
        dnd_spellschool.slug AS spellschool_slug,
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_spell

        LEFT OUTER JOIN dnd_spellschool ON dnd_spell.school_id = dnd_spellschool.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_spell.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.sid + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_spell.name ASC";
        
        return sql;
    }
}
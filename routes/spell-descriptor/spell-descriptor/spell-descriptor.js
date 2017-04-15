module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spelldescriptor.slug AS itemid, 
        dnd_spell.id, 
        dnd_spell.name, 
        dnd_spell.slug,
        dnd_spelldescriptor.id AS descriptor_name, 
        dnd_spelldescriptor.name AS descriptor_name, 
        dnd_spelldescriptor.slug AS descriptor_slug,
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug

        FROM dnd_spell_descriptors

        LEFT OUTER JOIN dnd_spell ON dnd_spell_descriptors.spell_id = dnd_spell.id
        LEFT OUTER JOIN dnd_spelldescriptor ON dnd_spell_descriptors.spelldescriptor_id = dnd_spelldescriptor.id
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
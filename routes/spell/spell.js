module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spell.id AS itemid, 
        dnd_spell.name, 
		dnd_spell.slug,
		dnd_spell.verbal_component,
		dnd_spell.somatic_component,
		dnd_spell.material_component,
		dnd_spell.arcane_focus_component,
		dnd_spell.divine_focus_component,
		dnd_spell.xp_component,
        dnd_spellschool.id AS spellschool_id, 
        dnd_spellschool.name AS spellschool_name, 
        dnd_spellschool.slug AS spellschool_slug,
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_spell

        LEFT OUTER JOIN dnd_spellschool ON dnd_spell.school_id = dnd_spellschool.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_spell.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_spell.name ASC";
        
        return sql;
    }
}
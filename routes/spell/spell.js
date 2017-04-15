module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spell.slug AS itemid, 
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
        dnd_spellsubschool.id AS spellsubschool_id, 
        dnd_spellsubschool.name AS spellsubschool_name, 
        dnd_spellsubschool.slug AS spellsubschool_slug,
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_spell

        LEFT OUTER JOIN dnd_spellschool ON dnd_spell.school_id = dnd_spellschool.id
        LEFT OUTER JOIN dnd_spellsubschool ON dnd_spell.sub_school_id = dnd_spellsubschool.id
        LEFT OUTER JOIN dnd_rulebook ON dnd_spell.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_spell.name ASC";
        
        return sql;
    }
}
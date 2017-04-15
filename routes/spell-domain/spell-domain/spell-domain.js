module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_domain.slug AS itemid, 
        dnd_spell.id, 
        dnd_spell.name, 
        dnd_spell.slug,
        dnd_domain.id AS domain_id, 
        dnd_domain.name AS domain_name, 
        dnd_domain.slug AS domain_slug, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug 

        FROM dnd_spelldomainlevel

        LEFT OUTER JOIN dnd_spell ON dnd_spelldomainlevel.spell_id = dnd_spell.id
        LEFT OUTER JOIN dnd_domain ON dnd_spelldomainlevel.domain_id = dnd_domain.id
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
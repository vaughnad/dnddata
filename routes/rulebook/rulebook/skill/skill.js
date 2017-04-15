module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_skill.*, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug, 
        dnd_dndedition.id AS edition_id, 
        dnd_dndedition.name AS edition_name, 
        dnd_dndedition.slug AS edition_slug 
        
        FROM dnd_skillvariant 
        
        LEFT OUTER JOIN dnd_skill ON dnd_skillvariant.skill_id = dnd_skill.id 
        LEFT OUTER JOIN dnd_rulebook ON dnd_skillvariant.rulebook_id = dnd_rulebook.id
        LEFT OUTER JOIN dnd_dndedition ON dnd_rulebook.dnd_edition_id = dnd_dndedition.id
        `;
        
        // WHERE
        sql += " WHERE dnd_skill.slug = '" + req.params.sid + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
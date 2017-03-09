module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_skillvariant.id AS itemid, 
        dnd_skill.name, 
        dnd_skill.slug, 
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug
        
        FROM dnd_skillvariant 
        
        LEFT OUTER JOIN dnd_skill ON dnd_skillvariant.skill_id = dnd_skill.id 
        LEFT OUTER JOIN dnd_rulebook ON dnd_skillvariant.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_skill.name ASC";
        
        return sql;
    }
}
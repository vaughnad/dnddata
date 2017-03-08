module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_characterclassvariant_class_skills.characterclassvariant_id AS itemid, 
        * 

        FROM dnd_characterclassvariant_class_skills 

        LEFT OUTER JOIN dnd_skill ON dnd_skill.id = dnd_characterclassvariant_class_skills.skill_id
        `;

        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_skill.name ASC";
        
        return sql;
    }
}
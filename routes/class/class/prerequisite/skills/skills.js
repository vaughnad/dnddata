module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_characterclassvariantrequiresskill.character_class_variant_id AS itemid, 
        dnd_characterclassvariantrequiresskill.*, 
        dnd_skill.*

        FROM dnd_characterclassvariantrequiresskill

        LEFT OUTER JOIN dnd_skill ON dnd_characterclassvariantrequiresskill.skill_id = dnd_skill.id
        `;

        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_skill.name ASC";
        
        return sql;
    }
}
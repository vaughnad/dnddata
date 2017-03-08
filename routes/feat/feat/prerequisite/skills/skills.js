module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_featrequiresskill.feat_id AS itemid, 
        dnd_skill.* 

        FROM dnd_featrequiresskill

        LEFT OUTER JOIN dnd_skill ON dnd_skill.id = dnd_featrequiresskill.skill_id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_skill.name ASC";
        
        return sql;
    }
}
module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_featspecialfeatprerequisite.feat_id AS itemid, 
        * 

        FROM dnd_featspecialfeatprerequisite

        LEFT OUTER JOIN dnd_specialfeatprerequisite ON dnd_featspecialfeatprerequisite.special_feat_prerequisite_id = dnd_specialfeatprerequisite.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_specialfeatprerequisite.name ASC";
        
        return sql;
    }
}
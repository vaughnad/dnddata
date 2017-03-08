module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_feat_feat_categories.feat_id AS itemid, 
        dnd_featcategory.* 

        FROM dnd_feat_feat_categories

        LEFT OUTER JOIN dnd_featcategory ON dnd_feat_feat_categories.featcategory_id = dnd_featcategory.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_featcategory.name ASC";
        
        return sql;
    }
}
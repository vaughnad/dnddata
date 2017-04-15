module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_featcategory.slug AS itemid,
        dnd_feat.id, 
        dnd_feat.name, 
        dnd_feat.slug, 
        dnd_feat.description, 
        dnd_feat.description_html, 
        dnd_featcategory.id AS category_id, 
        dnd_featcategory.name AS category_name, 
        dnd_featcategory.slug AS category_slug

        FROM dnd_feat_feat_categories

        LEFT OUTER JOIN dnd_featcategory ON dnd_featcategory.id = dnd_feat_feat_categories.featcategory_id
        LEFT OUTER JOIN dnd_feat ON dnd_feat.id = dnd_feat_feat_categories.feat_id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.sid + "'";
        
        // ORDER BY
        sql += " ORDER BY dnd_feat.name ASC";
        
        return sql;
    }
}
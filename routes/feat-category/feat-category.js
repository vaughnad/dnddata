module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_featcategory.slug AS itemid,
        * 

        FROM dnd_featcategory
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_featcategory.name ASC";
        
        return sql;
    }
}
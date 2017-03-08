module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_featcategory.id AS itemid,
        * 

        FROM dnd_featcategory
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
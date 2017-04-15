module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_language.slug AS itemid, 
        dnd_language.* 
        
        FROM dnd_language
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.sid + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
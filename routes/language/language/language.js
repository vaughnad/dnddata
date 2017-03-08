module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_language.id AS itemid, 
        dnd_language.* 
        
        FROM dnd_language
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
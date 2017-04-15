module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_deity.slug AS itemid, 
        dnd_deity.* 
        
        FROM dnd_deity
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.sid + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
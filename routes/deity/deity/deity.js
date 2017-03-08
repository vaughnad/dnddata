module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_deity.id AS itemid, 
        dnd_deity.* 
        
        FROM dnd_deity
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
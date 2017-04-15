module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_deity.slug AS itemid, 
        dnd_deity.* 
        
        FROM dnd_deity
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_deity.name ASC";
        
        return sql;
    }
}
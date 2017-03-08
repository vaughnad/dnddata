module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spelldescriptor.id AS itemid, 
        * 
        
        FROM dnd_spelldescriptor
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
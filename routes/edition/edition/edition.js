module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_dndedition.id AS itemid,
        * 
        
        FROM dnd_dndedition
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
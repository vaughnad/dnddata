module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_dndedition.id AS itemid,
        * 
        
        FROM dnd_dndedition
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_dndedition.name ASC";
        
        return sql;
    }
}
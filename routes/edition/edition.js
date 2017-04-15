module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_dndedition.slug AS itemid,
        dnd_dndedition.*
        
        FROM dnd_dndedition
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_dndedition.name ASC";
        
        return sql;
    }
}
module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spelldescriptor.id AS itemid, 
        * 
        
        FROM dnd_spelldescriptor
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_spelldescriptor.name ASC";
        
        return sql;
    }
}
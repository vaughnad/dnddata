module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_language.id AS itemid, 
        dnd_language.* 
        
        FROM dnd_language
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_language.name ASC";
        
        return sql;
    }
}
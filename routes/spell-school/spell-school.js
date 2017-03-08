module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spellschool.id AS itemid, 
        * 
        
        FROM dnd_spellschool
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_spellschool.name ASC";
        
        return sql;
    }
}
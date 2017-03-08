module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spellschool.id AS itemid, 
        * 
        
        FROM dnd_spellschool
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
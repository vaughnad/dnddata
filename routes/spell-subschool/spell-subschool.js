module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spellsubschool.slug AS itemid, 
        * 
        
        FROM dnd_spellsubschool
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_spellsubschool.name ASC";
        
        return sql;
    }
}
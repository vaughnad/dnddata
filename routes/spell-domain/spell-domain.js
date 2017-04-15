module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_domain.slug AS itemid, 
        * 
        
        FROM dnd_domain
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_domain.name ASC";
        
        return sql;
    }
}
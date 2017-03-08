module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_domain.id AS itemid, 
        * 
        
        FROM dnd_domain
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
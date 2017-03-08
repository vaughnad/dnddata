module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spelldomainlevel.spell_id AS itemid, 
        dnd_domain.* 

        FROM dnd_spelldomainlevel

        LEFT OUTER JOIN dnd_domain ON dnd_spelldomainlevel.domain_id = dnd_domain.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
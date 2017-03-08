module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spell_descriptors.spell_id AS itemid, 
        dnd_spelldescriptor.* 

        FROM dnd_spell_descriptors

        LEFT OUTER JOIN dnd_spelldescriptor ON dnd_spell_descriptors.spelldescriptor_id = dnd_spelldescriptor.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
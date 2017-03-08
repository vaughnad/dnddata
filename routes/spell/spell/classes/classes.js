module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_spellclasslevel.spell_id AS itemid, 
        dnd_characterclass.* 

        FROM dnd_spellclasslevel

        LEFT OUTER JOIN dnd_characterclass ON dnd_spellclasslevel.character_class_id = dnd_characterclass.id
        LEFT OUTER JOIN dnd_spell ON dnd_spellclasslevel.spell_id = dnd_spell.id
        `;
        
        // WHERE
        sql += " WHERE itemid = '" + req.params.id + "'";
        
        // ORDER BY
        //sql += "";
        
        return sql;
    }
}
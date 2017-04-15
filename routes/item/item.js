module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_item.slug AS itemid, 
        dnd_item.id, 
        dnd_item.name, 
        dnd_item.slug, 
        dnd_item.price_gp,
        dnd_rulebook.id AS rulebook_id, 
        dnd_rulebook.name AS rulebook_name, 
        dnd_rulebook.slug AS rulebook_slug

        FROM dnd_item
        
        LEFT OUTER JOIN dnd_rulebook ON dnd_item.rulebook_id = dnd_rulebook.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_item.name ASC";
        
        return sql;
    }
}
module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_language.slug AS itemid, 
        dnd_language.name,
		dnd_language.slug
        
        FROM dnd_language
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_language.name ASC";
        
        return sql;
    }
}
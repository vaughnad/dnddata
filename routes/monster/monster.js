module.exports = {
    string: (req) => {
        
        // SELECT
        var sql = `SELECT 
        dnd_monster.id AS itemid, 
        dnd_monster.*, 
        dnd_racesize.name AS size_name 

        FROM dnd_monster

        LEFT OUTER JOIN dnd_racesize ON dnd_monster.size_id = dnd_racesize.id
        `;
        
        // WHERE
        //sql += "";
        
        // ORDER BY
        sql += " ORDER BY dnd_monster.name ASC";
        
        return sql;
    }
}
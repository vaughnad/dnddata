module.exports = {
    setup: (app, db, endpoint, sqlPath) => {
        console.log("Registering endpoint: " + endpoint);
        app.get(endpoint, (req, res) => {
            var result = [];
            var sql = require('./' + sqlPath).string(req);
            
            db.serialize(() => {
                db.each(sql, function(err, row) {
                    result.push(row);
                }, () => {
                    res.json(result);
                });
            });
        });
    }
}
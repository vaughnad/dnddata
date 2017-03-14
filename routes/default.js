module.exports = {
    setup: (app, db, endpoint, endpoints) => {
        console.log("Registering endpoint: /");
		
		
        app.get(endpoint, (req, res) => {
			
			var html = "";
			html += "<html>";
			
            html += "<head>";
			html += "<title>DnD Tools Database JSON</title>";
			html += "</head>";
			
            html += "<body>";
			
            html += "<h1>List of available requests</h1>";
            html += "<ul>";
            endpoints.forEach(function(item, i){
                html += "<li>";
                
				if(item[0].indexOf(":id") > -1 || item[0].indexOf(":rid") > -1 || item[0].indexOf(":sid") > -1){
					html += "<span>";
					html += "" + item[0] + "";
					if(item[0].indexOf(":id") > -1) {
						html += " <em>(:id = slug)</em>";
					} 
					if(item[0].indexOf(":rid") > -1) {
						html += " <em>(:rid = slug)</em>";
					}
					if(item[0].indexOf(":sid") > -1) {
						html += " <em>(:sid = slug)</em>";
					}
                    html += "</span>";
                } else {
                    html += "<a style='color: black; font-weight: bold;' href='" + item[0] + "'>" + item[0] + "</a>";
                }
                
                html += "</li>";
            });
            html += "</ul>";
			html += "<p>&nbsp;</p>";
            html += "<h2>List of all endpoints in JSON:</h2>";
			html += "<ul><li><a style='color: black; font-weight: bold;' href='/endpoints'>/endpoints</a></li></ul>";
			
			html += "</body>";
			
            html += "</html>";
			
            res.send(html);
        });
    }
}
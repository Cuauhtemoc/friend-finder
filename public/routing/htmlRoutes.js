path = require("path");

module.exports = function(app){
    //routes for html pages
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../survey.html"));

    });
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../home.html"));
    });
}
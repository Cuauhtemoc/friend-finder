var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080; 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))
//link our other JS files and run their containing function
require("./public/routing/htmlRoutes")(app);
require("./public/routing/apiRoutes")(app);
//listen for get and post requests made by client
app.listen(PORT, function(){
    console.log("listening on port: "+ PORT)
})
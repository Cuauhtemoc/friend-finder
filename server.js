var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080; 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))

require("./public/routing/htmlRoutes")(app);
require("./public/routing/apiRoutes")(app);

app.listen(PORT, function(){
    console.log("listening on port: "+ PORT)
})
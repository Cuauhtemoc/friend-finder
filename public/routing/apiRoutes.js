
module.exports = function(app){
    var friendData = require("../../app/data/friends");
    //route for looking at JSON data
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    })
    //recieve post req from client and send back their best match
    app.post("/api/friends", function(req, res){
        var currentFriend = friendData[0];
        var currentBest = 100;
        var nextBest;
        for (var i = 0; i < friendData.length; i++)
        {
            for (var j = 0; j < friendData[i].scores.length; j++){
                nextBest += Math.abs(parseInt(req.body.scores[j]) - parseInt(friendData[i].scores[j])); 
            }
            if (nextBest < currentBest )
            {   
                currentBest = nextBest;
                currentFriend = friendData[i];
            }
            nextBest = 0;
        }
        res.json(currentFriend);
        friendData.push(req.body);
    })
};   
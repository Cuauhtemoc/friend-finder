
module.exports = function(app){
    var friendData = require("../../app/data/friends");

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    })
    app.post("/api/friends", function(req, res){
        var currentFriend = friendData[0];
        var currentBest = 100;
        var nextBest;
        for (var i = 0; i < friendData.length; i++)
        {
            for (var j = 0; j < friendData[i].scores.length; j++){
                nextBest += Math.abs(parseInt(req.body.scores[j]) - parseInt(friendData[i].scores[j])); 
            }
            console.log(nextBest);
            if (nextBest < currentBest )
            {   
                currentBest = nextBest;
                currentFriend = friendData[i];
                console.log(currentFriend);
            }
            nextBest = 0;
        }
        res.json(currentFriend);
    })
};   
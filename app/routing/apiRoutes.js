var friendsData = require("../data/friends");

console.log(friendsData)

module.exports = function(app) {

  app.get("/data/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/data/friends", function(req, res) {    
    var rank = []
    //TODO create logic that will check the friends and return the most compatible one. 
    compareFriends(req);
    console.log(rank);
    findSmallest(rank);
    console.log(res);
    
  });  
  
};

function compareFriends (req) {
friendsData.forEach(function(value) {
  for (i = 0; i < friendsData.scores.length; i++){      
  let a = 0;      
  let b = Math.abs(friendsData.scores[i] - req.Userdata.scores)
  a+=b
  }
  rank.push(a);  
});
}


function findSmallest(rank) {
  var min = Math.min.apply(null,rank);
   return res.json(friendsData[indexOf(min)]);
}

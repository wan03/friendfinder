var friendsData = require("../data/friends");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {    
    
    //TODO create logic that will check the friends and return the most compatible one. 
    
    
    
    if (tableData.length < 5) {

      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });  

};

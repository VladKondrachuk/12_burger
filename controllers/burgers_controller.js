var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

///////////////////////////////End Function/////////////////////////////////////////////////////////////////////////
router.get("/", function(req, res){
    burger.all(function(data){
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });   
});
///////////////////////////////End Function/////////////////////////////////////////////////////////////////////////
router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ],function(result){
        res.join({id: result.insertId})
    }); 
});
///////////////////////////////End Function/////////////////////////////////////////////////////////////////////////
router.put("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    
    console.log("condition", condition);
    
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if(result.changedRows ===0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
///////////////////////////////End Function/////////////////////////////////////////////////////////////////////////
router.delete("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    
    burger.delete(condition, function(result){
        if(result.affectedRows ==0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});
module.exports = router;
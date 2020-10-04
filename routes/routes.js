const teamController=require('../controllers/team')
const playerController=require('../controllers/player')

module.exports = (app) => {

    var router = require("express").Router();
  
    router.get("/team/:id", teamController.findOne);
    router.get("/team", teamController.findAll);
    router.post("/team", teamController.save);
    router.put("/team/:id", teamController.update);
    router.delete("/team/:id", teamController.delete);

    router.get("/player/:id", playerController.findOne);
    router.get("/player", playerController.findAll);
    router.post("/player", playerController.save);
    router.put("/player/:id", playerController.update);
    router.delete("/player/:id", playerController.delete);

    
    app.use('/api/', router); 
  };
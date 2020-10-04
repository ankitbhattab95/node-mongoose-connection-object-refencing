const settingsController=require('../controllers/settings')

module.exports = (app) => {

    var router = require("express").Router();
  
    
    router.get("/settings/:id", settingsController.findOne);
    router.get("/settings", settingsController.findAll);
    router.post("/settings", settingsController.save);
    router.put("/settings/:id", settingsController.update);
    router.delete("/settings/:id", settingsController.delete);

    
    app.use('/api/', router); 
  };
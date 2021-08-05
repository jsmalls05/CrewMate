const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    //Get ALL
    app.get("/api/pirate", PirateController.findAllPirates);
    //Get ONE
    app.get("/api/pirate/:_id", PirateController.findOnePirates);
    //Create ONE
    app.post("/api/pirate/new", PirateController.createPirates);
    //Delete ONE
    app.delete("/api/pirate/delete/:_id", PirateController.deletePirates);
    //Update ONE
    app.put("api/pirate/update/:_id", PirateController.updatePirates);
}
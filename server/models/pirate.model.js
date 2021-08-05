const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Gotta have a Pirate Name!!"],
        minlength: [3, "Tell us your name!"]
    },
    position: {
        type: String,
        required: [true, "Gotta have a Crew Postion!!"]
    },
    url: {
        type: String,
        required: [true, "Gotta have a picture mate!!"]
    },
    treasure: {
        type: Number,
        required: [true, "Tell me about these treasure chest!!"],
        min: [1, "Have to have treasure to be on this ship!!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Gotta have a saying my mate!!"],
        minlength: [5, "Something funny and not short!!"]
    },
    pegLeg: {
        type: String,
        required: [true, "Either yes or no"]
    },
    eyePatch: {
        type: String,
        required: [true, "Either yes or no"]
    },
    hookHand: {
        type: String,
        required: [true, "Either yes or no"]
    }

}, { timestamps: true })

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;
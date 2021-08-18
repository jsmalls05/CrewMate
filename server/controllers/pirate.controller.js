const Pirate = require("../models/pirate.model"); 

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then(allPirat => res.json({ pirates: allPirat }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.findOnePirates = (req, res) => {
    Pirate.findOne({ _id: req.params._id })
        .then(onePirat => res.json({ pirate: onePirat }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.createPirates = (req, res) => {
    Pirate.create(req.body)
        .then(newPirat => res.json({ pirate: newPirat }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.deletePirates = (req, res) => {
    Pirate.remove({ _id: req.params._id })
        .then(res.json({ message: "Aye matie you can't be on this ship!!" }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.updatePirates = (req, res) => {
    Pirate.update({ _id: req.params._id }, {
            $set: {
                name: req.body.name,
                position: req.body.position,
                url: req.body.url,
                treasure: req.body.treasure,
                catchPhrase: req.body.catchPhrase
            }
        })
        .then(allPirat => res.json({ pirates: allPirat }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

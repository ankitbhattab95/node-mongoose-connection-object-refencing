let teamModel = require("../models/team");
let playerModel = require("../models/player");

exports.findAll = async (req, res) => {
  try {
    let team = await teamModel.find()
      .populate('player', ['name'])
      res.send(team)
    }
    catch (e) {
      res.status(500).send(e)
    }
  }
  
  exports.findOne = async (req, res) => {
    try {
      let team = await teamModel.findOne({ _id: req.params.id })
      .populate('player', ['name'])
    res.send(team)
  }
  catch (e) {
    res.status(500).send(e)
  }
}

exports.save = async (req, res) => {
  try {
    for (let i = 0; i < req.body.player.length; i++) {
      const id = req.body.player[i];

      let player = await playerModel.findOne({ _id: id })
      if (!player) {
        throw ({"error":`player id ${id} does not exist`})
      }
    }
    await teamModel.create(req.body)
    res.status(201).send()
  }
  catch (e) {
    res.status(500).send(e)
  }
}

exports.update = async (req, res) => {
  try {

    let team = await teamModel
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    return res.send(team)
  }
  catch (e) {
    res.status(500).send(e)
  }
}


exports.delete = async (req, res) => {
  try {
    team = await teamModel.deleteOne({ _id: req.params.id })
    res.status(200).send(team)
  }
  catch (e) {
    res.status(500).send(e)
  }
}


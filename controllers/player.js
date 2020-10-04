let playerModel = require("../models/player");

exports.findAll = async (req, res) => {
  try {
    let player = await playerModel.find()
    res.send(player)
  }
  catch (e) {
    res.status(500).send(e)
  }
}

exports.findOne = async (req, res) => {
  try {
    let player = await playerModel.findOne({ _id: req.params.id })
    res.send(player)
  }
  catch (e) {
    res.status(500).send(e)
  }
}

exports.save = async (req, res) => {
  try {
    let player = await playerModel.create(req.body)
    res.status(201).send(player)
  }
  catch (e) {
    res.status(500).send(e)
  }
}

exports.update = async (req, res) => {
  try {

    let player = await playerModel
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    return res.send(player)
  }
  catch (e) {
    res.status(500).send(e)
  }
}


exports.delete = async (req, res) => {
  try {
    player = await playerModel.deleteOne({ _id: req.params.id })
    res.status(200).send(player)
  }
  catch (e) {
    res.status(500).send(e)
  }
}


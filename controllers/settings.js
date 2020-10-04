let settingsModel = require("../models/settings");

exports.findAll = async (req, res) => {
  try {
    let settings = await settingsModel.find()
      .populate('contentType', ['name']).exec()
    res.send(settings)
  }
  catch (e) {
    res.status(500).send({ error: e })
  }
}

exports.findOne = async (req, res) => {
  try {
    let settings = await settingsModel.findOne({ _id: req.params.id })
    res.send(settings)
  }
  catch (e) {
    res.status(500).send({ error: e })
  }
}

exports.save = async (req, res) => {
  try {
    await settingsModel.create(req.body)
    res.status(201).send()
  }
  catch (e) {
    res.status(500).send({ error: e })
  }
}

exports.update = async (req, res) => {
  try {

    let settings = await settingsModel
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    return res.send(settings)
  }
  catch (e) {
    res.status(500).send({ error: e })
  }
}


exports.delete = async (req, res) => {
  try {
    settings = await settingsModel.deleteOne({ _id: req.params.id })
    res.status(200).send(settings)
  }
  catch (e) {
    res.status(500).send({ error: e })
  }
}


var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('player', schema);
var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  name: { type: String, unique: true, dropDups: true },
  player: [{ type: Schema.Types.ObjectId, ref: 'player', required: true }],
});

module.exports = mongoose.model('team', schema);
var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let settingSchema = new Schema({
  dimensions: {
    width: Number,
    height: Number
  },
  count: {
    max: Number,
    min: Number,
  }
},{ _id : false })

let schema = new Schema({
  partner: { type: String, unique: false},
  contentType: { type: Schema.Types.ObjectId, ref:'contentType', unique: false},
  carouselSetting: settingSchema,
  railSetting: settingSchema
});

module.exports = mongoose.model('setting', schema);
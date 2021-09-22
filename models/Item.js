const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  dimension: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  weight: {
    type: String,
    required: true,
  },
  voltage: {
    type: String,
    required: true,
  },
  powerConsumption: {
    type: String,
    required: true,
  },
  cadr: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  noice: {
    type: String,
    required: true,
  },
  pm25: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: true,
  },
  sensor: {
    type: String,
    required: true,
  },
  controllers: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  avaible: {
    type: Date,
  },
  img:
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);

const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    color: {
      type: String,
    },
  dimension: {
    type: String,
  },
  material: {
    type: String,
  },
  
  weight: {
    type: String,
  },
  voltage: {
    type: String,
  },
  powerConsumption: {
    type: String,
  },
  cadr: {
    type: String,
  },
  area: {
    type: String,
  },
  noice: {
    type: String,
  },
  pm25: {
    type: String,
  },
  filter: {
   type: String,
  },
  sensor: {
    type: String,
  },
  controllers: {
    type: String,
  },
  certification: {
    type: String,
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);


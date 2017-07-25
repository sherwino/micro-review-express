const mongoose = require('mongoose');

const User = require('./usermod.js');

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    prodBrand:     { type: String, required: true },
    prodName:      { type: String, required: true },
    prodModel:     { type: String, required: true },
    prodUPC:       { type: String },
    prodMfg:       { type: String },
    prodParts:     { type: String },
    prodImg:       { type: String },

    //reference the id of the user
    // createdBy:          { type: Schema.Types.ObjectId },
    // updatedBy:          { type: Schema.Types.ObjectId }

    // this is the way I would write it if I wanted to make the user a subdoc
    // owner:          { type: User.schema }
  },
  {
    timestamps: true
  }

);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_name: String,
    product_brand: String,
    category: String,
    qty: Number,
    sku: Number,
    price: Number,
    meta: [
      {
        image_url: String,
        item_description: String,
      },
    ],
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

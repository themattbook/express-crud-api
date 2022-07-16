const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    product_name: String,
    product_brand: String,
    category: String,
    qty: Number,
    sku: Number,
    price: Number,
    meta: [{
      image_url: String,
      item_description: String
    }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
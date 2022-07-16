const asyncHandler = require("express-async-handler");
const Product = require("../models/dataModel");
// @desc Get data
// @route GET /api/data
// @access Private
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
});
// @desc Set data
// @route POST /api/data
// @access Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error(
      "Ensure you are using the data parameter in the request body"
    );
  }
  const product = await Product.create({
    product_name: req.body.product_name,
    product_brand: req.body.product_brand,
    category: req.body.cateogry,
    qty: req.body.qty,
    sku: req.body.sku,
    meta: [
      {
        image_url: req.body.meta[0].image_url,
        item_description: req.body.meta[0].item_description,
      },
    ],
  });
  res.status(200).json(product);
});
// @desc Modify data
// @route PUT /api/data/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found.");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProduct);
});
// @desc Delete data
// @route DELETE /api/data/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found.");
  }
  await product.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
};

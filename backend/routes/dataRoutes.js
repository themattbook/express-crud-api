const express = require("express");
const router = express.Router();
const {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/dataController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProduct).post(protect, setProduct);
router.route("/:id").delete(protect, deleteProduct).put(protect, updateProduct);

module.exports = router;

const express = require('express')
const router = express.Router()
const {getProduct, setProduct, updateProduct, deleteProduct} = require('../controllers/dataController')

router.route('/').get(getProduct).post(setProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)


module.exports = router;
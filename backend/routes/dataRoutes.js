const express = require('express')
const router = express.Router()
const {getData, setData, updateData, deleteData} = require('../controllers/dataController')

router.route('/').get(getData).post(setData)
router.route('/:id').delete(deleteData).put(updateData)


module.exports = router;
const express = require("express");
const { getGuides,getGuide,createGuide,updateGuide,deleteGuide } = require("../controllers/guides");
const router = express.Router();

const {protect, authorize} = require('../middleware/auth')

router.route('/').get(getGuides).post(protect, authorize('admin'),createGuide);

router.route('/:id').get(getGuide).put(protect,authorize('admin'),updateGuide).delete(protect,authorize('admin'),deleteGuide);

module.exports = router;
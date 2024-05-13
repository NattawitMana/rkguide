const express = require("express");
const { getGuides,getGuide,createGuide,updateGuide,deleteGuide } = require("../controllers/guides");
const router = express.Router();

router.route('/').get(getGuides).post(createGuide);

router.route('/:id').get(getGuide).put(updateGuide).delete(deleteGuide);

module.exports = router;
const express = require("express");
const {getGames, getGame, createGame, updateGame, deleteGame} = require("../controllers/games");
const router = express.Router();

const {protect, authorize} = require('../middleware/auth')

router.route('/').get(getGames).post(protect, authorize('admin'),createGame);

router.route('/:id').get(getGame).put(protect,authorize('admin'),updateGame).delete(protect,authorize('admin'),deleteGame);

module.exports = router;
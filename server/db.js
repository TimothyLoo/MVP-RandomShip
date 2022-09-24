const mongoose = require('mongoose');

const topScoreSchema = new mongoose.Schema({
  username: String,
  score: Number,
});

const TopScore = mongoose.model('TopScore', topScoreSchema);

mongoose.connect('mongodb://localhost/randomShip');

module.exports = TopScore;

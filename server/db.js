const mongoose = require('mongoose');

const topScoreSchema = new mongoose.Schema({
  score: Number,
});

const TopScore = mongoose.model('Top Score', topScoreSchema);

mongoose.connect('mongodb://localhost/randomShip');

const mongoose = require('mongoose');
// const { ModuleFilenameHelpers } = require('webpack');

const topScoreSchema = new mongoose.Schema({
  score: Number,
});

const TopScore = mongoose.model('TopScore', topScoreSchema);

mongoose.connect('mongodb://localhost/randomShip');

module.exports = TopScore;

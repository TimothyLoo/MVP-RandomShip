const TopScore = require('./db.js');

module.exports = {
  getTopScores: () => TopScore.find(),
  postTopScore: () => TopScore.insertMany([{ score: 1000000 }]),
};

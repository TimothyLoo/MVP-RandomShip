const TopScore = require('./db.js');

module.exports = {
  getTopScores: () => TopScore.find(),
  postTopScore: (newScore) => TopScore.insertMany([newScore]),
};

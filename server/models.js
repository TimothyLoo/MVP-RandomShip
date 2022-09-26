const TopScore = require('./db.js');

module.exports = {
  getTopScores: () => TopScore.find().sort({ score: 'desc' }).limit(10),
  postTopScore: (newScore) => TopScore.insertMany([newScore]),
  getUserTopScores: ({ username }) =>
    TopScore.find({ username: username }).sort({ score: 'desc' }).limit(10),
};

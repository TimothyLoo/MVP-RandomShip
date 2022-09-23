const models = require('./models.js');

module.exports = {
  getTopScores: (req, res) => {
    models
      .getTopScores()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },

  postTopScore: (req, res) => {
    models
      .postTopScore()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
};

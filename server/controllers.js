const models = require('./models.js');

module.exports = {
  getTopSores: (req, res) => {
    const result = models.getTopSores();
    res.send(result);
  },
};

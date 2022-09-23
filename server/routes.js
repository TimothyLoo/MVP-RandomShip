const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/topScores', controllers.getTopScores);
router.post('/topScores', controllers.postTopScore);

module.exports = router;

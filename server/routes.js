const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/topScores', controllers.getTopSores);

module.exports = router;

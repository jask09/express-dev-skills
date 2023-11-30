var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skill')

// GET /skill
router.get('/', skillsCtrl.index);

// GET /skill/new
router.get('/new', skillsCtrl.new)

// GET /skill/:id
router.get('/id:', skillsCtrl.show)

// POST/skill
router.post('/', skillsCtrl.create)


// DELETE / skill/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
var express = require('express');
var router = express.Router();
var PersonalController = require('../controller/personal.controller');
var CareerController = require('../controller/career.controller');

router.get('/personal/info', PersonalController.info);
router.get('/personal/hobby', PersonalController.hobbies);

router.get('/career/experience/:id', CareerController.experience);
router.get('/career/experience', CareerController.experiences);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.post('/setUser', controller.setUser);
module.exports = router;


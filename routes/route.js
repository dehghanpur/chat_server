const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.post('/setUser', controller.setUser);
router.get('/getMessage', controller.getMessage);
module.exports = router;


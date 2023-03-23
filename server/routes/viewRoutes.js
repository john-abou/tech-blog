const router = require('express').Router();
const {
    login,
} = require('../controllers/views-controller')

// GET request to login page
router.route('/').get(login);
  
module.exports = router;
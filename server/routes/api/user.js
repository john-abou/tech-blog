const router = require('express').Router();
const {
    getSingleUser,
    createUser,
    login,
    logout,
} = require('../../controllers/user-controller');

// /api/user/signup
router.route('/signup').post(createUser);

// /api/user/:id
router.route('/:id').get(getSingleUser);

// /api/user/login
router.route('/login').post(login)

// /api/user/logout
router.route('/logout').post(logout)

module.exports = router;
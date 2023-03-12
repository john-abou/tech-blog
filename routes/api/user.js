const router = require('express').Router();
const {
    getSingleUser,
    createUser
} = require('../../controllers/user-controller');

// /api/user
router.route('/').post(createUser);

// /api/user/:id
router.route('/:id').get(getSingleUser);

module.exports = router;
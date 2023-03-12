const router = require('express').Router();
const  {
    getUsers,
    getSingleUser,
    createUser
} = require('../../controllers/User-controller');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:id
router.route('/:id').get(getSingleUser);

module.exports = router;
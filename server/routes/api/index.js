const router = require('express').Router();
const userRoutes = require('./user');
const blogpostRoutes = require('./blogpost');

router.use('/user', userRoutes);
router.use('/blogpost', blogpostRoutes);

module.exports = router;
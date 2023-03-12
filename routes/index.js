const router = require('express').Router();
const apiRoutes = require('./api')
const viewsRoutes = require('./viewRoutes')

router.use('/', viewsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
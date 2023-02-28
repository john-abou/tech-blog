const apiRoutes = require("./api");
const viewsRoutes = require("./views-routes");
const router = require("express").Router();

router.use("/", viewsRoutes);
router.use("/api", apiRoutes);

module.exports = router;

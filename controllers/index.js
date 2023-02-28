const router = require("express").Router();
const viewsRoutes = require("./views-routes");
const apiRoutes = require("./api");

router.use("/", viewsRoutes);
router.use("/api", apiRoutes);

module.exports = router;

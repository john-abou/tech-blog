const router = require("express").Router();
const viewsRoutes = require("./views-controller");
const apiRoutes = require("./api");

router.use("/", viewsRoutes);
router.use("/api", apiRoutes);

module.exports = router;

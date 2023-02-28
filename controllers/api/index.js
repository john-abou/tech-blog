const router = require("express").Router();
const blogpostRouter = require("./blogpostRoutes");
const userRouter = require("./userRoutes");

router.use("/blogpost", blogpostRouter);
router.use("/user", userRouter);

module.exports = router;

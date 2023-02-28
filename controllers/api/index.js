const blogpostRouter = require("./blogpost");
const userRouter = require("./user");
const router = require("express").Router();

router.use("/blogpost", blogpostRouter);
router.use("/user", userRouter);

module.exports = router;

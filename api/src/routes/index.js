const { Router } = require("express");

const searchRouter = require("./search.js");

const router = Router();

router.use("/search", searchRouter);

module.exports = router;
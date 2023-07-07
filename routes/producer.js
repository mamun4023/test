const express = require("express");
const router = express.Router();
const { addProducer, producerList } = require("../controllers/producer");
const { isAdmin, isUser } = require("../middlewares/auth");

router.post("/add", isAdmin, addProducer);
router.get("/list", isUser, producerList);

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req,res)=> {
    res.send("user");
});

router.get("/info", (req,res)=> {
    res.send("user information");
});

router.get("/:id", (req,res) => {
    res.send(`${req.params.id}のユーザー`)
});

module.exports = router;
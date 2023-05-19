const express = require('express');
const app = express();
const PORT = 3001;
const userRouter = require("./routes/user");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // console.log('hello world');
    // res.send("<h1>hi</h1>")
    // res.sendStatus();
    res.status(500).json({msg: "error"});
});

// routing
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", costomerRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`) ) ;
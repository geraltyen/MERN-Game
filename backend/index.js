const express = require("express");
const {connection} = require("./configs/db");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./Route/user.route");
const { adminuserRouter } = require("./Route/adminuser.route");
const { authentication } = require("./Middleware/authenticate.middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("Welcome to my game");
})

app.use("/adminusers", adminuserRouter)
app.use("/users", userRouter);

app.use(authentication);


app.listen(process.env.port, async()=>{
    try {
        console.log("Connected to DB");
    } catch (err) {
        console.log(err.message)
    }
    console.log("Server is running on port 6060");
})
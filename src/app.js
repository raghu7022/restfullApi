const express = require("express");
const cors = require('cors')
require("./db/conn");
const User = require("./models/users");
const userRouter = require("./routers/user")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(userRouter);





app.listen(port, () => {
    console.log(`This is Port ${port}`);
})

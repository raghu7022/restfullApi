const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/userapi", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connected successfully");
}).catch((e) => {
    console.log("not connected");
})
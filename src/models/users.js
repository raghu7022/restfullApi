const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already used"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        //  max: 14,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true
    }
})

//we will create a new collection
const User = new mongoose.model('User', userSchema);

module.exports = User;
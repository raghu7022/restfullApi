const express = require("express");
const router = new express.Router();
const User = require("../models/users")

//Create the data of Users
router.post("/user", async (req, res) => {
    try {
        //it reads body data from request
        //it valiadtes recieved data using User Schema
        const user = new User(req.body);
        //now it should save it to db
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
})




//Read the data of single User

router.get("/user", async (req, res) => {
    try {
        const uName = req.query.name
        console.log(uName);
        const userData = await User.find({ name: uName });
        res.send(userData);
        console.log(userData);
    } catch (e) {
        res.status(404).send(e);
    }
})

//Read the data of registered Users
router.get("/users", async (req, res) => {
    try {
        const userData = await User.find();
        res.send(userData);
    } catch (e) {
        res.status(404).send(e);
    }
})

// router.get("/user/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const userData = await User.findById(_id);
//         res.send(userData);
//     } catch (e) {
//         res.send(e);
//     }
// })

//Update user information by id

router.patch("/user", async (req, res) => {
    try {
        const _id = req.query.name;
        const updateUser = await User.findOneAndUpdate({ name: _id }, req.body, {
            new: true
        });
        res.send(updateUser);
    } catch (e) {
        res.status(404).send(e);
    }
})

//Delete the users information by id
router.delete("/user", async (req, res) => {
    try {
        const _id = req.query.name;
        const deleteUser = await User.findOneAndDelete({ name: _id });
        if (!{ name: _id }) {
            return res.status(400).send();
        }
        res.send(deleteUser);
    } catch (e) {
        res.status(500).send(e);
    }
})

// router.delete("/user/:id", async (req, res) => {
//     try {
//         const _id = req.params.id
//         const deleteUser = await User.findByIdAndDelete(req.params.id);
//         if (!req.params.id) {
//             return res.status(400).send();
//         }
//         res.send(deleteUser);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })



module.exports = router;
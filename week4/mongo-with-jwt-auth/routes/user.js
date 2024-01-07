const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const { User, Course } = require("../db/index.js");

const express = app();


// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        message:"User created successfully"
    })
});

router.get('/courses', async (req, res) => {


});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
});
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const router = Router();
const { Admin, User }  = require('../db');
const { JWT_SECRET } = require('..');
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exits 
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: 'Admin created successfully'
    })
    // .then(function() {
    //     res.json({
    //         message: 'Admin created successfully'
    //     })
    // })

});


router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            message:"Incorrect email and pass"
        })
    }

    
});


router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // use zod for validation
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:'Course created successfully', courseId: newCourse._id
    })
});

const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exits 
    Admin.create({
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

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({})
    res.json({
        course:response
    })

});


module.exports = router;
const router = require('express').Router();
const Empley = require('../models/student');



router.post('/student-add', async (req, res) => {
    try {
        const newStudent = new Empley(req.body)
        const createUser = await newStudent.save()
        res.status(201).send(createUser)

    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/showstudent',async(req,res)=>{
    try {
        const data = await Empley.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router


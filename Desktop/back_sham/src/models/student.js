const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: { type: String},
    roll: { type: Number},
    phone_No: { type:Number},
    adress: { type:String}

})




const student = new mongoose.model('student', studentSchema);

module.exports = student;
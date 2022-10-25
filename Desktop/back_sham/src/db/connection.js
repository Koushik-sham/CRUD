const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dackend:uNPvkNhnBMfvBP2p@cluster0.gw0gvam.mongodb.net/CURD',{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,



}).then(() => {
    console.log('Connection is Successfull')
}).catch((error)=>{
    console.log('no Conection',error)
})


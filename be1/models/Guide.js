const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please add a name'],
        unique: true,
        trim:true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    gameName:{
        type: String,
        required: [true,'Please add a gameName'],
        maxlength: [50,'Name can not be more than 50 characters']
    },
    description:{
        type: String,
        required: [true,'Please add a description'],
        maxlength: [500,'Description can not be more than 500 characters']
    },
    picture:{
        type: String,
        required:[true,'Please add a picture'],
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

module.exports=mongoose.model('Guide',GuideSchema);
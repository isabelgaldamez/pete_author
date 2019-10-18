const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name : {
        type: String,
        trim : true,
        required : [true, 'User must enter a name'],
        minlength : [2, 'Name must have 2 characters or longer'],
        maxlength: 250,
    },

}, {timestamps: true});

mongoose.model('Author', authorSchema);
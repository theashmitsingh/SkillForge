const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    role: {
        type: String,
        enum: ["Admin", "Student", "Instructor", "Visitor"],
        default: "Visitor"
    }
});

module.exports = mongoose.model("Users", userSchema);
console.log("inside of models/pet.js");

const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet must have a title"],
        maxlength: 255,
        minlength: [3, "Pet must be at least 3 characters long"]

    },
    type: {
        type: String,
        required: [true, "Pet type must have a title"],
        maxlength: 255,
        minlength: [3, "Pet type must be at least 3 characters long"]

    },
    description: {
        type: String,
        required: [true, "Description must have a title"],
        maxlength: 255,
        minlength: [3, "Description must be at least 3 characters long"]

    },
    skillOne: {
        type: String,
        required: [true, "Skill is required"],
        maxlength: [255, "Skill name Too long"]

    },
    skillTwo: {
        type: String,
        required: [true, "Skill is required"],
        maxlength: [255, "Skill name Too long"]

    },
    skillThree: {
        type: String,
        required: [true, "Skill is required"],
        maxlength: [255, "Skill name Too long"]
        
    },

}, {timestamps: true});

mongoose.model('Pet', PetSchema);

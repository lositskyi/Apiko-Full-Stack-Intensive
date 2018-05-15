const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        required: true,
    },
    description: {
        type: String,
        minlength: 10,
        required: true,
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    createdById: {
        type: ObjectId,
    }
});

module.exports = Schema;
const { Schema, model } = require('mongoose');

const ThooughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        length: [1, 126]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
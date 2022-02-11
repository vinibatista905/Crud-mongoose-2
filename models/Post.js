const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Posts', PostSchema);

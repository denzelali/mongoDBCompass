const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema ({
    Patient: {
        type: String,
        required: true
    },
    Staff: {
        type: String,
        required: true
    },
    Admission_date: {
        type: Number,
        required: true
    }
});
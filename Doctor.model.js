const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema ({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
});
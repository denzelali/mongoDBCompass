const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
});
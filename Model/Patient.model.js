const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema ({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
const Patient = mongoose.model('Patient_details', PatientSchema);
module.exports = Patient;
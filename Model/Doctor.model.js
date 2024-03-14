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
    specialty: {

        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor_details', DoctorSchema);
module.exports = Doctor;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema ({
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
    }
});

const Staff = mongoose.model('staff_details', StaffSchema);
module.exports = Staff;
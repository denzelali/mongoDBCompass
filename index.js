const express = require('express');
const mongoose =  require('mongoose');
const app = express();

app.use(express.json());

const url = "mongodb://127.0.0.1:27017/";
const port = "3000";

// Connect to MongoDB database
mongoose.connect(url, {})
    .then(result => console.log("Connected to the Database"))
    .catch(err => console.error(err));

app.all('/test', (req, res) =>{
    console.log();
    res.send();
})

const StaffRoute =  require('./Routes/Staff.route');
app.use('/staff', StaffRoute);

const RoomRoute = require( './Routes/Room.route' );
app.use('/room', RoomRoute);

const PatientRoute = require( './Routes/Patient.route' );
app.use('/patient', PatientRoute);

const HospitalRoute = require ('./Routes/Hospital.route');
app.use ('/hospital', HospitalRoute);

const DoctorRoute = require('./Routes/Doctor.route');
app.use ('/doctors', DoctorRoute);

const DepartmentRoute = require('./Routes/Department.route');
app.use ('department', DepartmentRoute);

app.use((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port 3000`);
});
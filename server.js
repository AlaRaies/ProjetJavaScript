'use strict';
const express = require('express');
const app = express();
const port = 3000;
const connectionString = "mongodb+srv://zaineb:UGzN0ofw7HCJX3qY@cluster0.2eprr.mongodb.net/projetjavascript?retryWrites=true&w=majority";
const dotenv = require('dotenv');
dotenv.config();
const mongoose =  require("mongoose");
const bodyParser =  require("body-parser");
const userController = require('./controllers/userController');
const hotelController = require('./controllers/hotelController');
const reservationController = require('./controllers/reservationController');
//connection to database 
mongoose.connect(connectionString, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//configuration of routes 
app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});
//Les routes pour le userController
app.post("/api/users/signup", userController.userInscription);
app.get("/api/users/signin", userController.userLogin);
app.get("/api/users/findAllUsers", userController.findAllUsers);
app.get("/api/users/findUserById", userController.findUserById);
app.post("/api/users/updateUser", userController.updateUser);
app.post("/api/users/deleteUser", userController.deleteUser);
//Les routes pour le hotelController
app.post("/api/hotels/addHotel", hotelController.addHotel);
app.get("/api/hotels/deleteHotel", hotelController.deleteHotel);
app.get("/api/hotels/findAllHotels", hotelController.findAllHotels);
app.post("/api/hotels/findHotelById", hotelController.findHotelById);
app.post("/api/hotels/updateHotel", hotelController.updateHotel);
//Les routes pour le reservationController
app.post("/api/reservation/addReservation", reservationController.addReservation);
app.get("/api/reservation/deleteReservation", reservationController.deleteReservation);
app.get("/api/reservation/findAllReservations", reservationController.findAllReservations);
app.post("/api/reservation/findReservationById", reservationController.findReservationById);
app.post("/api/reservation/updateReservation", reservationController.updateReservation);
app.get("/api/reservation/validateReservation", reservationController.validateReservation);
app.get("/api/reservation/validateReservation", reservationController.cancelReservation);
//lunching the app @ port 3000
app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});
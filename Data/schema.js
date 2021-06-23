var mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));
const userModel = require('../models/userModel').userModel
const hotelModel = require('../models/hotelModel').hotelModel
const reservationModel = require('../models/reservationModel').reservationModel
const Schema = mongoose.Schema
const Model = mongoose.model
var ObjectId = mongoose.Schema.Types.ObjectId;

//***************************Defining schema*************************************************************
const UserSchema = new Schema(userModel)
const HotelSchema = new Schema(hotelModel)
const reservationSchema = new Schema(reservationModel)


// **********************Defining schema************************************************
exports.userMongooseModel = Model('Users', UserSchema, 'userCollection')
exports.hotelMongooseModel = Model('Hotels', HotelSchema, 'hotelCollection')
exports.reservationMongooseModel = Model('Reservations', reservationSchema, 'reservationCollection')

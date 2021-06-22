var mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));
const userModel = require('../models/userModel').userModel
const hotelModel = require('../models/hotelModel').hotelModel
const Schema = mongoose.Schema
const Model = mongoose.model
var ObjectId = mongoose.Schema.Types.ObjectId;

//***************************Defining schema*************************************************************
const UserSchema = new Schema(userModel)
const HotelSchema = new Schema(hotelModel)

// **********************Defining schema************************************************
exports.userMongooseModel = Model('Users', UserSchema, 'userCollection')
exports.hotelMongooseModel = Model('Hotels', HotelSchema, 'hotelCollection')

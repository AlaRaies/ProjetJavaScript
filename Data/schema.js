var mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));
const userModel = require('../models/userModel').userModel
const Schema = mongoose.Schema
const Model = mongoose.model
var ObjectId = mongoose.Schema.Types.ObjectId;

//***************************Defining schema*************************************************************
const UserSchema = new Schema(userModel)

// **********************Defining schema************************************************
exports.userMongooseModel = Model('Users', UserSchema, 'userCollection')

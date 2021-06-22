const hotelMongooseModel = require('./schema').hotelMongooseModel;
exports.addHotel = function(hotel) {
    const model = new hotelMongooseModel(hotel);
    return new Promise((resolve, reject) => {
        model.save({})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })

    })
}
exports.deleteHotel = function(hotelId) {
    return new Promise((resolve, reject) => {
        hotelMongooseModel.deleteOne({'_id': hotelId}, {})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.updateHotel = function(hotelId, hotelUpdated) {
    return new Promise((resolve, reject) => {
        hotelMongooseModel.updateOne({'_id':hotelId}, hotelUpdated, {})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.findHotelByQuery = function(query) {
 return new Promise((resolve, reject) => {
    hotelMongooseModel.find(query)
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.findAllHotels = function() {
    return new Promise((resolve, reject) => {
        hotelMongooseModel.find({})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}

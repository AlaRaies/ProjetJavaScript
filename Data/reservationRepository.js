const reservationMongooseModel = require('./schema').reservationMongooseModel;
exports.addReservation = function(reservation) {
    const model = new reservationMongooseModel(reservation);
    return new Promise((resolve, reject) => {
        model.save({})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })

    })
}
exports.deleteReservation = function(reservationId) {
    return new Promise((resolve, reject) => {
        reservationMongooseModel.deleteOne({'_id': reservationId}, {})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.updateReservation = function(reservationId, reservationUpdated) {
    return new Promise((resolve, reject) => {
        reservationMongooseModel.updateOne({'_id':reservationId}, reservationUpdated, {})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.findReservationByQuery = function(query) {
 return new Promise((resolve, reject) => {
    reservationMongooseModel.find(query)
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.findAllReservations = function() {
    return new Promise((resolve, reject) => {
        reservationMongooseModel.find({})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}

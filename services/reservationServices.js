var reservationRepository = require('../Data/reservationRepository');
const self = this;
exports.addReservation = function (reservation) {
    return new Promise((resolve, reject) => {
            reservation.status = "Validated";
             reservationRepository.addReservation(reservation)
                .then(res => {resolve(res)})
                .catch(err => { reject(err) })

    })
}
exports.findAllReservations = function () {
    return new Promise((resolve, reject) => {
        reservationRepository.findAllReservations()
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
exports.updateReservation = function (id, reservation) {
    return new Promise((resolve, reject) => {
        reservationRepository.updateReservation({ _id: id }, reservation)
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
exports.validateReservation = function (id) {
    return new Promise((resolve, reject) => {
        self.findReservationById(id)
            .then(res => {
                res.status = "Validated";
                reservationRepository.updateReservation({ _id: id }, res)
                .then(res => { resolve(res) })
                .catch(err => { reject(err) })
            })
            .catch(err => { reject(err) })
    })
}
exports.cancelReservation = function (id) {
    return new Promise((resolve, reject) => {
        self.findReservationById(id)
            .then(res => {
                res.status = "Canceled";
                reservationRepository.updateReservation({ _id: id }, res)
                .then(res => { resolve(res) })
                .catch(err => { reject(err) })
            })
            .catch(err => { reject(err) })
    })
}
exports.findReservationById = function (id) {
    return new Promise((resolve, reject) => {
        reservationRepository.findReservationByQuery({ _id: id })
            .then(res => {
                if (res && res.length > 0) {
                    resolve(res[0])
                }
                else resolve();
            })
            .catch(err => { reject(err) })
    })
}
exports.deleteReservation = function (id) {
    return new Promise((resolve, reject) => {
        reservationRepository.deleteReservation({ id: id })
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
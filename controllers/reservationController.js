const self = this;
const reservationServices = require('../services/reservationServices');

exports.addReservation = function (req, res) {
    let reservation = req.body['reservation'];
    reservationServices.addReservation(reservation)
        .then(result => {
                res.send(result)
        })
        .catch(err => { res.status(400).send(err) })

}
exports.findAllReservations = function (req, res) {
    reservationServices.findAllReservations()
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
exports.findReservationById = function (req, res) {
    let reservationId = req.query['id'];
    reservationServices.findReservationById(reservationId)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
exports.updateReservation = function (req, res) {
    let reservation = req.body['reservation'];
    reservationServices.updateReservation(reservation.id, reservation)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })
}
exports.deleteReservation = function (req, res) {
    let id = req.body['id'];
    reservationServices.deleteReservation(id)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })
}
exports.validateReservation = function (req, res) {
    let id = req.query['id'];
    reservationServices.validateReservation(id)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })
}
exports.cancelReservation = function (req, res) {
    let id = req.query['id'];
    reservationServices.cancelReservation(id)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })
}
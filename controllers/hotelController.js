const self = this;
const hotelServices = require('../services/hotelServices');

exports.addHotel = function (req, res) {
    let hotel = req.body['hotel'];
    hotelServices.addHotel(hotel)
        .then(result => {
                res.send(result)
        })
        .catch(err => { res.status(400).send(err) })

}
exports.findAllHotels = function (req, res) {
    hotelServices.findAllHotels()
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
exports.findHotelById = function (req, res) {
    let hotelId = req.body['id'];
    hotelServices.findHotelById(hotelId)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
exports.updateHotel = function (req, res) {
    let hotel = req.body['hotel'];
    hotelServices.updateHotel(hotel.id, hotel)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })
}
exports.deleteHotel = function (req, res) {
    let id = req.body['id'];
    hotelServices.deleteHotel(id)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
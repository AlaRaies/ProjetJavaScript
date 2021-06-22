var hotelRepository = require('../Data/hotelRepository');
const self = this;
exports.addHotel = function (hotel) {
    return new Promise((resolve, reject) => {
             hotelRepository.addHotel(hotel)
                .then(res => {resolve(res)})
                .catch(err => { reject(err) })

    })
}
exports.findAllHotels = function () {
    return new Promise((resolve, reject) => {
        hotelRepository.findAllHotels()
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
exports.updateHotel = function (id, hotel) {
    return new Promise((resolve, reject) => {
        hotelRepository.updateHotel({ _id: id }, hotel)
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
exports.findHotelById = function (id) {
    return new Promise((resolve, reject) => {
        hotelRepository.findHotelByQuery({ _id: id })
            .then(res => {
                if (res && res.length > 0) {
                    resolve(res[0])
                }
                else resolve();
            })
            .catch(err => { reject(err) })
    })
}
exports.deleteHotel = function (id) {
    return new Promise((resolve, reject) => {
        hotelRepository.deleteHotel({ id: id })
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
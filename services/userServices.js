var UserRepository = require('../Data/userRepository');
const self = this;
exports.userInscription = function (user) {
    return new Promise((resolve, reject) => {
             UserRepository.addUser(user)
                .then(res => {resolve(res)})
                .catch(err => { reject(err) })

    })
}
exports.userLogin = function (credentials) {
    return new Promise((resolve, reject) => {
        UserRepository.findUserByQuery(credentials)
            .then(res => { resolve(res) })
            .catch(err => {
                reject(err)
                console.log(err)
            })
    })
}
exports.findAllUsers = function () {
    return new Promise((resolve, reject) => {
        UserRepository.findAllUsers()
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
exports.updateUser = function (id, user) {
    return new Promise((resolve, reject) => {
        UserRepository.updateUser({ _id: id }, user)
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
exports.checkIfUserExist = function (email) {
    return new Promise((resolve, reject) => {
        UserRepository.findUserByEmail({ email: email })
            .then(res => {
                if (res && res.length > 0) {
                    resolve(true)
                }
                else resolve(false);
            })
            .catch(err => { reject(err) })
    })
}
exports.findUserById = function (id) {
    return new Promise((resolve, reject) => {
        UserRepository.findUserByQuery({ _id: id })
            .then(res => {
                if (res && res.length > 0) {
                    resolve(res[0])
                }
                else resolve();
            })
            .catch(err => { reject(err) })
    })
}
exports.deleteUser = function (id) {
    return new Promise((resolve, reject) => {
        UserRepository.deleteUser({ id: id })
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
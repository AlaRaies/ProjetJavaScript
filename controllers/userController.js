const self = this;
const userService = require('../services/userServices');

exports.userInscription = function (req, res) {
    let user = req.body['user'];
    userService.userInscription(user)
        .then(result => {
                res.send(result)
        })
        .catch(err => { res.status(400).send(err) })

}
exports.userLogin = function (req, res) {
    userService.userLogin({ username: req.body['username'], password: req.body['password'] })
        .then(result => {
            if (!(result.length > 0)) {
                res.status(401).send()
            }
            else {
                res.status(200).send()
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err)
        })

}
exports.findAllUsers = function (req, res) {
    userService.findAllUsers()
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
exports.findUserById = function (req, res) {
    let userId = req.body['id'];
    userService.findUserById(userId)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
exports.updateUser = function (req, res) {
    let user = req.body['user'];
    userService.updateUser(user.id, user)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })
}
exports.deleteUser = function (req, res) {
    let id = req.body['id'];
    userService.deleteUser(id)
        .then(result => { res.send(result) })
        .catch(err => { res.status(400).send(err) })

}
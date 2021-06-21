const userMongooseModel = require('./schema').userMongooseModel;
exports.addUser = function(user) {
    const model = new userMongooseModel(user);
    return new Promise((resolve, reject) => {
        model.save({})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })

    })
}
exports.deleteUser = function(userId) {
    return new Promise((resolve, reject) => {
        userMongooseModel.deleteOne({'_id': userId}, {})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.updateUser = function(userId, userUpdated) {
    return new Promise((resolve, reject) => {
        userMongooseModel.updateOne({'_id':userId}, userUpdated, {})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.findUserByQuery = function(query) {
 return new Promise((resolve, reject) => {
    userMongooseModel.find(query)
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
exports.findAllUsers = function() {
    return new Promise((resolve, reject) => {
        userMongooseModel.find({})
            .then(res => { resolve(res) })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}

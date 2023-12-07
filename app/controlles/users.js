const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

exports.getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

exports.getItem = (req, res) => {

}

exports.createItem = async (req, res) => {
    try {
        const { email, password } = req.body
        const resDetail = await userModel.create({
            email, password
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

exports.updateItem = (req, res) => {

}

exports.deleteItem = (req, res) => {

}

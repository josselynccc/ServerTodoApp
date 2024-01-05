const { httpError } = require('../helpers/handleError')
const mongoose = require('mongoose')
const userModel = require('../models/users')

exports.getItems = async (req, res) => {
    
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

exports.getItem = async (req, res) => {
    try {
        const {id} = req.params;
        const resDetail = await userModel.findOne({_id: new mongoose.Types.ObjectId(id)})
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

exports.createItem = async (req, res) => {
    try {
        const { email, password, nombre, apellido, edad } = req.body
        const resDetail = await userModel.create({
            email, password, nombre, apellido, edad
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

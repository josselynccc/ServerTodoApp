const mongoose = require('mongoose')
const { httpError } = require('../helpers/handleError')
const taskModel = require('../models/task')

const getItems = async (req, res) => {
    try {
        const listAll = await taskModel.find({})

        res.send({ data: listAll })


    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        const {id} = req.params;
        const resDetail = await taskModel.findOne({_id: new mongoose.Types.ObjectId(id)})
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const createItem = async (req, res) => {
    try {
        const {label, color} = req.body
        const resDetail = await taskModel.create({
            label, color
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updateItem = (req, res) => {

}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.params;
        const resDetail = await taskModel.deleteOne({_id: new mongoose.Types.ObjectId(id)})
        
        res.send({ data: resDetail })
    } catch (e) {
        console.error(e); // Loguea el error para depuración
        res.status(500).send({ error: 'Se produjo un error interno en el servidor.' });
    }
}

const addItem = async (req, res) => {
    try {
        const {id} = req.params;
        const {order, items} = req.body
        const resDetail = await taskModel.updateOne(
            { _id: new mongoose.Types.ObjectId(id) },
            { $addToSet: { 
                list: {
                    order,
                    items
                } 
                } 
            },
            {upsert: true, new:true}
         )

        
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem, addItem }
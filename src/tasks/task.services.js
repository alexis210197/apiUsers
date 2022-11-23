const { json } = require('express')
const taskControllers = require('./task.controller')

const getAllUsers = (req, res) => {
    const data = taskControllers.findAllUsers()
    res.status(200).json(data)
}

const getUsersById = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findUsersById(id)

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postUsers = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body

    if (first_name && last_name && email && password && birthday) {
        const data = taskControllers.createUsers({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
    } else {
        res.status(400).json(data);
    }
};

const putUser =  (req, res) => {
    const id = req.params.id
    const {first_name, last_name, email, password, birthday} = req.body

    if (first_name  && last_name && email && password && birthday) {
        const data = taskControllers.updateUsers(id,{first_name,last_name,email,password,birthday})
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid ID or Data'})
    }
}

const deleteUsers = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findUsersById(id)

    if (data) {
        const users = taskControllers.deleteUsers(data)
        res.status(200).json({message: `user ${id} deleted`, users})
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }

}


module.exports = {
    getAllUsers,
    getUsersById,
    postUsers,
    deleteUsers,
    putUser
}
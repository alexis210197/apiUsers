const router = require('express').Router()
const taskServices = require('./task.services')

router.get('/users', taskServices.getAllUsers)
router.post('/users', taskServices.postUsers)
router.get('/users/:id', taskServices.getUsersById)
router.put('/users/:id', taskServices.putUser)
router.delete('/users/:id', taskServices.deleteUsers)

module.exports = router
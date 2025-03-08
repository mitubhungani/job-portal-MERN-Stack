const { Router } = require("express");
const userDetailsController  = require('../controller/details')
const routes = Router();

routes.get('/user/:userId',userDetailsController.getUserDetailsByUserId)
routes.post('/',userDetailsController.createUserDetails)
routes.patch('/:id',userDetailsController.updateUser)

module.exports = routes;
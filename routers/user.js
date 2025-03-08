const { Router } = require("express");
const userController = require('../controller/user');
const Ability = require("../middleware/Ability");
const routes = Router()

routes.post('/signup',userController.signupUser)
routes.post('/signin',userController.signinUser)
routes.patch('/:userId',userController.updateUser)
routes.delete('/:userId',userController.deleteUser)
routes.get('/info/:userId',userController.getUserById)
routes.get('/',Ability(["ADMIN"]),userController.getUserByQuery)
routes.get('/verify/:token/:otp',userController.verifyEmail)

module.exports = routes;
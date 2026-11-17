const { Router } = require("express");

const authRouter = Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware')

authRouter.post('/register', authController.registerUser);
authRouter.post('/login', authController.loginUser);
authRouter.get('/get-me', authMiddleware.authUser, authController.getUser);
authRouter.post('/logout', authController.logoutUser);


module.exports = authRouter;
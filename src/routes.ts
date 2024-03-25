import express from "express";
import { servicesController } from "./controllers/servicesController";
import { authController } from "./controllers/authController";


const router = express.Router()

//Rotas para registar novos usuários e para realizar o login
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/services', servicesController.index)


export { router }
import express from "express";
import { servicesController } from "./controllers/servicesController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";


const router = express.Router()

//Rotas para registar novos usuários e para realizar o login
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//Rotas de serviços: Listar serviços, cadastrar novo serviço, atualizar serviço e deletar serviço.
router.get('/services', servicesController.index)
router.post('/services', ensureAuth, servicesController.create)


export { router }
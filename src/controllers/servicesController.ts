import { Request, Response } from "express";
import { Service } from "../models";
import { servicesService } from "../services/servicesService";
import { AuthenticatedRequest } from "../middlewares/auth";

export const servicesController = {
    //GET -> /services
    index: async (req: Request, res: Response) => {
        try {
            const services = await Service.findAll({
                attributes: ['id', 'serviceName', 'description', 'durationTime', 'price', 'userId']
            })

            return res.json(services)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({message: error.message})
            }
        }
    },

    //POST -> /services
    create: async (req: AuthenticatedRequest, res: Response) => {
        const { serviceName, description, durationTime, price} = req.body
        const userId = req.user!.id

        try {
            const service = await servicesService.createService({
                serviceName,
                description,
                durationTime,
                price,
                userId
            })

            return res.status(201).json(service)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({message: error.message})
            }
        }
    },

    //PUT -> /services/:id
    update: async (req: AuthenticatedRequest, res: Response) => {
        const user = req.user!.id
        const serviceId = req.params.id
        const { serviceName, description, durationTime, price} = req.body

        try {
            const service = await Service.findByPk(serviceId)

            if (user !== service?.userId) return res.status(401).json({ message: 'Ops... Você não pode alterar um serviço de outro profissional.'})

            const updatedService = await servicesService.updateService(Number(serviceId), {
                serviceName,
                description,
                durationTime,
                price
            })

            return res.status(201).json(updatedService)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({message: error.message})
            }
        }
    },

    //DELETE -> /services/:id
    delete: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const serviceId = req.params.id

        try {
            const service = await Service.findByPk(serviceId)

            if (!service?.id) return res.status(404).json({ message: 'Serviço não encontrado, tente novamente.'})

            if (userId !== service?.userId) return res.status(401).json({ message: 'Ops... Você não pode excluir um serviço de outro profissional.'})

            await servicesService.deleteService(Number(serviceId))

            return res.status(204).send()
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({message: error.message})
            }
        }
    }
}
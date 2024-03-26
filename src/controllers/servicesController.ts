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
    }
}
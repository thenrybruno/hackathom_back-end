import { Request, Response } from "express";
import { Service } from "../models";

export const servicesController = {
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
    }
}
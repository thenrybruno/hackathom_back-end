import { Service, ServiceCreationAttributes } from "../models/Service";

export const servicesService = {
    createService: async (attributes: ServiceCreationAttributes) => {
        const service = await Service.create(attributes)

        return service
    },

    updateService: async () => {
        
    }
}
import { Service, ServiceCreationAttributes } from "../models/Service";

export const servicesService = {
    createService: async (attributes: ServiceCreationAttributes) => {
        const service = await Service.create(attributes)

        return service
    },

    updateService: async (id: number, attributes: {
        serviceName: string,
        description: string
        durationTime: number
        price: number
    }) => {
        const [ affectedRows, updatedService ] = await Service.update(attributes, { where: { id }, returning: true } )

        return updatedService[0]
    },

    deleteService: async (serviceId: number) => {
        await Service.destroy({
            where: {
                id: serviceId
            }
        })
    }
}
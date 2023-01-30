import prismaClient from "../../prisma";

export interface ServicesRequest {
    service_id: string;
}

class RemoveServicesService {
    async execute({service_id}: ServicesRequest) {
        const service = await prismaClient.service.delete({
            where: {
                id: service_id
            },
            select: {
                id: true,
                name: true
            }
        });

        return service;
    }
}

export { RemoveServicesService }
import prismaClient from "../../prisma";

interface ListServiceProps {
    service_id: string;
}

class ListServicesService {

    async execute({service_id}: ListServiceProps) {

        const services = await prismaClient.service.findUnique({
            where: {
                id: service_id
            },
            include: {
                categories: true
            }
        });

        return services;

    }

}

export { ListServicesService }
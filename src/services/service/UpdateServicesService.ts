import prismaClient from "../../prisma";

interface ServicesRequest {
    service_id: string;
    name: string;
    price: string;
    category_id: string;
}

class UpdateServicesService {

    async execute({service_id, name, price, category_id}: ServicesRequest){

        const service = await prismaClient.service.update({
            where: {
                id: service_id
            },
            data: {
                name: name,
                price: price,
                category_id: category_id
            }
        });

        return service;

    }

}

export {UpdateServicesService}
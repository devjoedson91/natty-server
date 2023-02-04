import prismaClient from "../../prisma";

interface DetailRequest {
    date?: string;
    service_id?: string;
}

class ListReservationsByDateService {

    async execute({date, service_id}: DetailRequest) {

        const reserve = await prismaClient.reserve.findMany({

            where: {
                date: new Date(date),
                service_id: service_id
                // status: false
            },
            orderBy: {
                hour: 'asc'
            },
            include: {
                users: true,
                services: true
            }

        });

        const getUser = reserve.map(data => {

            return data.users.name;

        });

        console.log(getUser);

        return reserve;

    }

}

export { ListReservationsByDateService }
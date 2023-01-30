import prismaClient from "../../prisma";

interface ScheduleRequest {
    service_id?: string;
    date?: string;
}

class ListScheduleByServiceAndDate {
    async execute({service_id, date}: ScheduleRequest) {

        const findByService = await prismaClient.timeService.findMany({
            where: {
                service_id: service_id,
                date: date
            },
            orderBy: {
                hour: 'asc'
            }
        });

        return findByService;
    }
}

export { ListScheduleByServiceAndDate }
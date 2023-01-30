import prismaClient from "../../prisma";

export interface ScheduleRequest {
    schedule_id: string;
}

class RemoveScheduleService {
    async execute({schedule_id}: ScheduleRequest) {
        const schedule = await prismaClient.timeService.delete({
            where: {
                id: schedule_id
            },
            select: {
                id: true,
                date: true
            }
        });

        return schedule;
    }
}

export { RemoveScheduleService }
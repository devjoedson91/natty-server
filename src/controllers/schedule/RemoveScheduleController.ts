import { Request, Response } from "express";

import { RemoveScheduleService } from "../../services/schedule/RemoveScheduleService";

class RemoveScheduleController {

    async handle(req: Request, res: Response) {

        try {
            const schedule_id = req.query.schedule_id as string;

            const removeSchedule = new RemoveScheduleService();

            const schedule = await removeSchedule.execute({schedule_id});

            return res.json(schedule);
        } catch(err) {

            console.log('erro ao remover horário', err);
            
        }

    }

}

export {RemoveScheduleController}
import { Request, Response } from "express";

import { ListScheduleByServiceAndDate } from "../../services/schedule/ListScheduleByServiceAndDate";

class ListScheduleByServiceAndDateController {

    async handle(req: Request, res: Response) {

        const service_id = req.query.service_id as string;
        const date = req.query.date as string;

        const listByService = new ListScheduleByServiceAndDate();

        const schedule = await listByService.execute({service_id, date});

        return res.json(schedule);

    }
}

export { ListScheduleByServiceAndDateController }
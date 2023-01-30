import { Request, Response } from "express";
import {ListReservationsByDateService} from '../../services/reserve/ListReservationsByDateService';

class ListReservationsByDateController {

    async handle(req: Request, res: Response) {

        const date = req.query.date as string;
        const service_id = req.query.service_id as string;

        const listReserveService = new ListReservationsByDateService();

        const reserve = await listReserveService.execute({date, service_id});

        return res.json(reserve);

    }

}

export { ListReservationsByDateController };
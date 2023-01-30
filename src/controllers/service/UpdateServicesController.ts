import { Request, Response } from "express";

import { UpdateServicesService } from "../../services/service/UpdateServicesService";

class UpdateServicesController {

    async handle(req: Request, res: Response) {

        try {
            const { service_id, name, price, category_id } = req.body;

            const updateReserveService = new UpdateServicesService();

            const service = await updateReserveService.execute({service_id, name, price, category_id});

            return res.json(service);

        } catch(err) {

            console.log(err);
            res.sendStatus(500);
        }       

    }

}

export {UpdateServicesController}
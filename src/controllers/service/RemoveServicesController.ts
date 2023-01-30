import { Request, Response } from "express";

import { RemoveServicesService } from "../../services/service/RemoveServicesService";

class RemoveServicesController {

    async handle(req: Request, res: Response) {

        try {
            const service_id = req.query.service_id as string;

            const removeService = new RemoveServicesService();

            const service = await removeService.execute({service_id});

            return res.json(service);
        } catch(err) {

            console.log('erro ao remover serviço', err);
            
        }

    }

}

export {RemoveServicesController}
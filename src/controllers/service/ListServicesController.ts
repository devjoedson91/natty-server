import { Request, Response } from "express";
import { ListServicesService } from "../../services/service/ListServicesService";

class ListServicesController {

    async handle(req: Request, res: Response) {

        const service_id = req.query.service_id as string;

        const listServicesController = new ListServicesService();

        const service = await listServicesController.execute({service_id});

        return res.json(service);

    }
}

export { ListServicesController }
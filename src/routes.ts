import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer';

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateServicesController } from "./controllers/service/CreateServicesController";
import { ListServicesController } from "./controllers/service/ListServicesController";
import { ListByCategoryController } from "./controllers/service/ListByCategoryController";
import { UpdateServicesController } from "./controllers/service/UpdateServicesController";
import { RemoveServicesController } from "./controllers/service/RemoveServicesController";

import { CreateReserveController } from "./controllers/reserve/CreateReserveController";
import { RemoveReserveController } from "./controllers/reserve/RemoveReserveController";
import { DetailUserReserveController } from "./controllers/reserve/DetailUserReserveController";
import { FinishReserveController } from "./controllers/reserve/FinishReserveController";
import { ListReservationsByDateController } from "./controllers/reserve/ListReservationsByDateController";

import { CreateScheduleController } from "./controllers/schedule/CreateScheduleController";
import { ListScheduleByServiceController } from "./controllers/schedule/ListScheduleByServiceController";
import { RemoveScheduleController } from "./controllers/schedule/RemoveScheduleController";
import { ListScheduleByServiceAndDateController } from "./controllers/schedule/ListScheduleByServiceAndDate";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// user routes

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

// category routes

router.post('/category', isAuthenticated, upload.single('file'), new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// services routes

router.post('/service', isAuthenticated, new CreateServicesController().handle);
router.get('/service', isAuthenticated, new ListServicesController().handle);
router.get('/category/service', isAuthenticated, new ListByCategoryController().handle);
router.patch('/service', isAuthenticated, new UpdateServicesController().handle);
router.delete('/service', isAuthenticated, new RemoveServicesController().handle);

// reserve routes

router.post('/reserve', isAuthenticated, new CreateReserveController().handle);
router.delete('/reserve', isAuthenticated, new RemoveReserveController().handle);
router.get('/reserve/detail/user', isAuthenticated, new DetailUserReserveController().handle);
router.put('/reserve/finish', isAuthenticated, new FinishReserveController().handle);
router.get('/reserve/detail/date', isAuthenticated, new ListReservationsByDateController().handle);

router.post('/schedule', isAuthenticated, new CreateScheduleController().handle);
router.get('/schedule/service', isAuthenticated, new ListScheduleByServiceController().handle);
router.get('/schedule/service/date', isAuthenticated, new ListScheduleByServiceAndDateController().handle);
router.delete('/schedule', isAuthenticated, new RemoveScheduleController().handle);

export { router };
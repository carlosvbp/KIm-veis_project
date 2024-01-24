import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists } from "../middlewares/schedules.middleware";
import { createScheduleController, readAllSchedulesByRealStateController } from "../controllers/schedules.controller";
import { createNewScheduleSchema } from "../schemas/schedules.schema";

export const scheduleRouter: Router = Router()

scheduleRouter.post("/",
verifyToken,
validateBody(createNewScheduleSchema),
verifyRealEstateExists,
verifyUserScheduleExists,
verifyRealEstateScheduleExists,
createScheduleController
)

scheduleRouter.get("/realEstate/:id", 
verifyToken, 
verifyAdmin,
readAllSchedulesByRealStateController
)
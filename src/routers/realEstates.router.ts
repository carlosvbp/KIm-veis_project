import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";
import { createRealEstateController, readAllRealEstatesController } from "../controllers/realEstates.controller";
import { createRealEstateSchema } from "../schemas/realEstates.schema";

export const realEstateRouter: Router = Router()

realEstateRouter.post("/", 
verifyToken,
verifyAdmin,
validateBody(createRealEstateSchema),
verifyAddressExists,
createRealEstateController
)

realEstateRouter.get("/", readAllRealEstatesController)
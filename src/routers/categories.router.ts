import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueCategoryName } from "../middlewares/categories.middleware";
import { createCategorySchema } from "../schemas/categories.schema";
import { createCategoryController, readCategoriesController, readRealEstatesByCategoryController } from "../controllers/categories.controller";

export const categoryRouter: Router = Router()

categoryRouter.post("/",
    validateBody(createCategorySchema),
    verifyToken,
    verifyUniqueCategoryName,
    verifyAdmin,
    createCategoryController
)

categoryRouter.get("/", readCategoriesController)
categoryRouter.get("/:id/realEstate",
    readRealEstatesByCategoryController)
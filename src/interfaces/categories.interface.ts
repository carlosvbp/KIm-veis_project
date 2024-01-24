import { z } from "zod";
import { createCategorySchema, readAllCategoriesSchema } from "../schemas/categories.schema";
import { Repository } from "typeorm";
import Category from "../entities/Category.entity";

export type CreateCategory = z.infer<typeof createCategorySchema>
export type ReadAllCategories = z.infer<typeof readAllCategoriesSchema>
export type CategoryRepo = Repository<Category>
import { z } from "zod";
import { RealEstate } from "../entities";

export const realStateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().or(z.string()).default(0),
    size: z.number().positive().int(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().int().positive(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().int().positive()
})

export const createRealEstateSchema = realStateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
})


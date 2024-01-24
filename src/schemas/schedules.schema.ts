import { z } from "zod";

export const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive().int(),
    userId: z.number().positive().int()
})

export const createNewScheduleSchema = scheduleSchema.omit({
    id: true,
    userId: true
})
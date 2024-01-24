import { z } from "zod";
import { createNewScheduleSchema } from "../schemas/schedules.schema";
import { Repository } from "typeorm";
import Schedule from "../entities/Schedule.entity";

export type CreateSchedule = z.infer<typeof createNewScheduleSchema>

export type ScheduleRepo = Repository<Schedule>
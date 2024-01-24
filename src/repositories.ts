import { AppDataSource } from "./data-source";
import Category from "./entities/Category.entity";
import Address from "./entities/Address.entity";
import User from "./entities/User.entity";
import RealEstate from "./entities/RealEstate.entity";
import Schedule from "./entities/Schedule.entity";
import { ScheduleRepo } from "./interfaces/shedules.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstates.interface";
import { CategoryRepo } from "./interfaces/categories.interface";
import { UserRepo } from "./interfaces/users.interface";

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)
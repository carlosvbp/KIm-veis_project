import { z } from "zod";
import { createRealEstateSchema } from "../schemas/realEstates.schema";
import { Repository } from "typeorm";
import RealEstate from "../entities/RealEstate.entity";
import Address from "../entities/Address.entity";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>

export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>

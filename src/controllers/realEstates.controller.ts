import { Request, Response } from "express"
import { createRealEstateService, readRealEstatesService } from "../services/realEstates.service"

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await createRealEstateService(req.body)

    return res.status(201).json(realEstate)
}

export const readAllRealEstatesController = async (req: Request, res: Response): Promise<Response> => {
    const realEstates = await readRealEstatesService()

    return res.status(200).json(realEstates)
}
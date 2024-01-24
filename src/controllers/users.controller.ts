import { NextFunction, Request, Response } from "express";
import { UserReturn } from "../interfaces/users.interface";
import { createUserService, deleteUserService, readAllUsersService, updateUserService } from "../services/users.service";

export const createUserController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const user: UserReturn = await createUserService(req.body)

    return res.status(201).json(user)
}

export const readAllUsersController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const users = await readAllUsersService()

    return res.status(200).json(users)
}

export const updateUserController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const { user } = res.locals
    const newUser = await updateUserService(req.body, user)

    return res.status(200).json(newUser)
}

export const deleteUserController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const { user } = res.locals
    await deleteUserService(user)

    return res.status(204).json()
}
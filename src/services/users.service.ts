import User from "../entities/User.entity";
import { UserReadReturn, UserReturn, UserUpdate, userCreate } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReturnListSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserService = async (data: userCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(data)

    await userRepo.save(user)

    return userReturnSchema.parse(user)
}

export const readAllUsersService = async (): Promise<UserReadReturn> => {
    const users: User[] = await userRepo.find()

    return userReturnListSchema.parse(users)
}

export const updateUserService = async (data: UserUpdate, user: User): Promise<UserReturn> => {
    console.log("fdasjo3298yhf398yhhfnuiefwioefw")
    const userUpdate: User = userRepo.create({...user, ...data})

    await userRepo.save(userUpdate)

    return userReturnSchema.parse(userUpdate)
}

export const deleteUserService = async (user: User) => {
    await userRepo.softRemove(user)
}
import "dotenv/config"
import { compare } from "bcryptjs";
import User from "../entities/User.entity";
import AppError from "../errors/AppErrors.error";
import { LoginReturn, UserLogin } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export const loginService = async (data: UserLogin): Promise<LoginReturn> => {
    const { email } = data
    const user: User | null = await userRepo.findOneBy({ email })

    if (!user) throw new AppError("Invalid credentials", 401)

    const comparePass = await compare(data.password, user.password)

    if (!comparePass) throw new AppError("Invalid credentials", 401)

    const token: string = sign(
        { email: user.email, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    )

    return { token }
}
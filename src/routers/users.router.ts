import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController, deleteUserController, readAllUsersController, updateUserController } from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const userRouter: Router = Router()

userRouter.post("/", 
validateBody(createUserSchema),
verifyUniqueUserEmail,
createUserController
)

userRouter.get("/", 
verifyToken,
verifyAdmin,
readAllUsersController
)

userRouter.patch("/:id", 
validateBody(updateUserSchema),
verifyToken,
verifyUserExists,
verifyPermissions,
updateUserController
)

userRouter.delete("/:id",
verifyToken,
verifyUserExists,
verifyPermissions,
deleteUserController
)
import { Router } from "express";
import { userRouter } from "./users.router";
import { loginRouter } from "./login.router";
import { categoryRouter } from "./categories.router";
import { realEstateRouter } from "./realEstates.router";
import { scheduleRouter } from "./schedules.router";

export const routes: Router = Router()

routes.use("/users", userRouter)
routes.use("/login", loginRouter)
routes.use("/categories", categoryRouter)
routes.use("/realEstate", realEstateRouter)
routes.use("/schedules", scheduleRouter)
import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router()

    router.route("/register").post(
        upload.fields([
            {
                name: "avatar",
                maxCount: 1
            }, 
            {
                name: "coverImage",
                maxCount: 1
            }
        ]),
        registerUser
        )

    router.route("/login").post(loginUser)

    //secured routes
    router.route("/loggout").post(verifyJwt, loggoutUser)

export default router
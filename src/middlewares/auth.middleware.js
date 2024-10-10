import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { User}  from "../models/user.model";


export const verifyJwt  = asyncHandler(async(req,res,next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
         const user = await User.findById(decodeToken?._id).select
         ("-password -refreshToken")
    
         if(!user) {
            //next video discussion
            thow new ApiError(401, "invalid access token")
         }
         req.user = user;
         next()
    } catch (error) {
        thow new ApiError(401, error?.message || "Invalid access token")
    }

})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()


/*
( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`)
    }
    catch (error) {
        console.error("ERROR:", error)

    }
}) ()
*/
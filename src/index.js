import dotenv from "dotenv"
//require('dotenv').config({path: './env'})
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
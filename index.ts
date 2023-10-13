import express, { Application } from "express"
import dotenv from "dotenv"
import db from "./config/db"
import { mainApp } from "./mainApp"
dotenv.config()

const app : Application = express()
const port: number = parseInt(process.env.PORT!)

mainApp(app)

const server = app.listen(process.env.PORT || port, ()=>{
    console.log("");
    db()
})

process.on("uncaughtException", (err : any)=>{
    console.log("server is shutting down due to uncaughtException", err);
    process.exit(1)
})

process.on("unhandledRejection", (reason : any)=>{
    console.log("server is shutting down due to unhandledRejection", reason);
   
    server.close(()=>{
        process.exit(1)
    })
})

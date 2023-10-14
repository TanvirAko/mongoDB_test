// import file
import express, { json } from "express";
import dotenv from "dotenv";
import colors from "colors";
import { mongodbconnections } from "./config/mongodb.js";
import techer_all_routs from "./router/techer_router.js"

// dotenv config
dotenv.config()

//env inv
const port = process.env.PORT || 6060;

// express init 
const app = express();
// public folder
app.use(express.static("public"))
//express use
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
// router 
app.use(techer_all_routs)
// express lisent 
app.listen (port , () => {
    mongodbconnections()
    console.log(`server is listening on ${port} port`.bgGreen.black);
});
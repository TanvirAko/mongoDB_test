import mongoose from "mongoose";


export const mongodbconnections = async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/techers")
        console.log(` mongo db connect susseceful`.bgBlue.black);
    }catch(error){
        console.log(`mongodb connection error: ${error.message}`.bgRed.black);
    }
} 
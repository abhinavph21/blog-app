import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected = db.connections[0].readyState
        console.log("connected to db");
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}
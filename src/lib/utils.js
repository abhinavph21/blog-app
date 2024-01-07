import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
    console.log(process.env.MONGO_URI);
    try {
        if (connection.isConnected) {
            console.log("using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}
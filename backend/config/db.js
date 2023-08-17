import mongoose from "mongoose";

export default async function connectDB () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(conn)
    } catch(err) {
        console.error(err);
    }
}
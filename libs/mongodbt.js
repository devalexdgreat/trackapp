import mongoose from "mongoose";

const connectMongoDBt = async () => {
    try {
        await mongoose.connect(process.env.MONGODBT_URI);
        console.log("Connected to MongoDBT.")
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDBt;
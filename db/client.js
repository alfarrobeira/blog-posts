import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

const DB_CONNECTION = process.env.MONGO_URI;

const client = mongoose.connect(DB_CONNECTION)
.then(() => console.log(`connected to mongo via mongoose ${mongoose.connection.host}`))
.catch((error) => console.error(error.message))

export default client;
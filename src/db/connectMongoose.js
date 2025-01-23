import mongoose from "mongoose";
import { MongoDB } from "../config/config.js";

const connectMongo = () => {
  mongoose.connect(MongoDB);
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit(1);
  });
};

export default connectMongo;

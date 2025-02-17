// lib/mongodb.js
import mongoose from "mongoose";
const connectDB = async () => {
  try {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI!);
  console.log("Connected to MongoDB"); 
  } catch (error) {
    console.log("Error  : ",error);
  }
};

export default connectDB;
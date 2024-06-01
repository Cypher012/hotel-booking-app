import mongoose from "mongoose";
import config from "config";

export const connectDb = async () => {
  const uri = config.get<string>("mongoDb_uri");
  try {
    await mongoose.connect(uri);
    console.log(`Database connected successfully`);
  } catch (e: any) {
    console.log(`error: ${e.errors}`);
    process.exit(1);
  }
};

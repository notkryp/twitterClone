import mongoose from "mongoose";

export const mongoConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connection Succesfull`);
  } catch (error) {
    console.error(`Error Connecting to Database : ${error.message}`);
    process.exit(1);
  }
};

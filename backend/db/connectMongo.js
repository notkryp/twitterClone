import mongoose from "mongoose";

export const mongoConn = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connetion Sucessfull`);
  } catch (error) {
    console.error(`Error Connecting to Database : ${error.message}`);
    process.exit(1);
  }
};

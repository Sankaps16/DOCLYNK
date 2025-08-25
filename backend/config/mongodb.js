import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log("Database connected"))
    

}


  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/doclynk`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB
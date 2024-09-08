import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Ensure environment variables are loaded

// Debug: check if MONGO_URI is defined
//console.log('MONGO_URI:', process.env.MONGO_URI);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);  // Exit process with failure
    }
};

export default connectDB;


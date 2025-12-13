import mongoose from "mongoose";

// Connect to MongoDB database
export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dishank:Dishank1404@cluster0.mtu9ct4.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

// Note: Replace with your own MongoDB connection string
// Avoid '@' symbol in database user's password to prevent errors
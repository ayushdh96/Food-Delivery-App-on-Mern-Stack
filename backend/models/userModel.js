import mongoose from "mongoose";

// User schema definition
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData:{type:Object,default:{}} // Stores cart items as {foodId: quantity}
}, { minimize: false }) // Keep empty objects in database

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
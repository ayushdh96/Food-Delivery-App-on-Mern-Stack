import mongoose from "mongoose";

// Order schema definition
const orderSchema = new mongoose.Schema({
    userId: {type:String,required:true},
    items: { type: Array, required:true}, // Array of food items with quantities
    amount: { type: Number, required: true}, // Total order amount
    address:{type:Object,required:true}, // Delivery address details
    status: {type:String,default:"Food Processing"}, // Order status tracking
    date: {type:Date,default:Date.now()},
    payment:{type:Boolean,default:false} // Payment confirmation
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
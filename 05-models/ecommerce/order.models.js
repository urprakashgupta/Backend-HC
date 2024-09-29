import mongoose from "mongoose";
import { type } from "os";

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    oderPrice : {
        type : Number,
        required: trusted
    },
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems : {
        type: [orderItemsSchema]
    },
    address: {
        type : String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERD"],
        default: "PENDING"
    }
} , {timestamps:true})

export const Order = mongoose.model("Order", orderSchema)
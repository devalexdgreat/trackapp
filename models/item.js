import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema(
    {
        tracking_id: Number,
        shipped_date: String,
        name: String,
        description: String,
        from_address: String,
        to_address: String,
        delivered_status: String
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
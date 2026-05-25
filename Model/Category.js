import mongoose from "mongoose";

const catModel = new mongoose.Schema({
cat_name: {
    type: String,
    required: true
},
amount: {
    type: Number,
     required: true
},
type: {
    type: String,
    enum: ["income", "expense", "saving"],
     required: true
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
     required: true
}
},{ timestamps: true })
export default mongoose.model("cartMode", catModel);
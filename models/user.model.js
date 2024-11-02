import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    terms: { type: Boolean, required: true },
  },
  { timestapms: true }
);
export default mongoose.model("users", userSchema);

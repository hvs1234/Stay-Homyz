import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    newpassword: String,
    confirmpassword: String,
});

export default mongoose.model("userdata",userSchema);

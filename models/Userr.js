import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: false },
        googleId: { type: String, required: false },
        id: { type: String },
    })

const User = mongoose.model("User", UserSchema)

export default User
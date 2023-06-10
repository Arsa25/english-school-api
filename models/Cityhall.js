import mongoose from "mongoose";

const CityhallModel = mongoose.Schema({

    name: {
        type: String
    },
    sifra: {
        type: String
    },
    contact: {
        street: { type: String },
        phone: { type: String },
        email: { type: String }
    }
})

const Cityhall = mongoose.model("Cityhall", CityhallModel)

export default Cityhall
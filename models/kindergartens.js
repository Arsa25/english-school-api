import mongoose from "mongoose";

const KindergartensModel = mongoose.Schema({

    name: {
        type: String
    },
    code: {
        type: String
    },
    address: {
        city: { type: String },
        cityhall: { type: String, },
        street: { type: String },

    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    manager: {
        type: String
    }
})

const Kindergartens = mongoose.model("Kindergartens", KindergartensModel)

export default Kindergartens
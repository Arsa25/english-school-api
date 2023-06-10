import mongoose from "mongoose";

const EmployeeModel = mongoose.Schema(
    {
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        adresa: {
            type: String
        },
        vrtic: {
            type: String
        },
        email: {
            type: String
        },
        telefon: {
            type: String
        }
    }
)

const Employee = mongoose.model("Employee", EmployeeModel)

export default Employee
import express from "express"
import User from "../models/Userr.js";
import Employee from "../models/Employee.js"
import Kindergartens from "../models/kindergartens.js"
import Cityhall from "../models/Cityhall.js";
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken";

const secret = "test";

const router = express.Router();
//singin
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (!oldUser)
            return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = Jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
            expiresIn: "1h",
        })

        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error);
    }
})
//signup
router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName}${lastName}`
        })
        const token = Jwt.sign({ email: result.email, id: result._id }, secret, {
            expiresIn: "1h",
        })

        res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
        console.log(error);
    }


});

//postavi profesora
router.post("/employee", async (req, res) => {

    const { ime, prezime, vrtic, adresa, email, telefon } = req.body
    const employee = new Employee({
        ime, prezime, vrtic, adresa, email, telefon
    })

    try {
        const ubacen = await employee.save()
        res.status(201).json(ubacen)
    } catch (err) {
        console.log(err);
    }
})



//dohvati profesora po id-ju
router.get("/employee/:id", async (req, res) => {
    try {

        const id = req.params.id
        const employee = await Employee.findById(id);
        if (employee) res.status(201).json(employee)

    } catch (err) {
        console.log(err);
    }

})



//dohvati sve profesore
router.get("/employee", async (req, res) => {
    try {

        const employee = await Employee.find({});
        res.json(employee)

    } catch (err) {
        console.log(err);
    }

})

//update profesora
router.put("/employee/:id", async (req, res) => {

    try {
        const id = req.params.id
        const employee = await Employee.findById(id);

        if (employee) {
            employee.ime = req.body.ime || employee.ime;
            employee.prezime = req.body.prezime || employee.prezime;
            employee.adresa = req.body.adresa || employee.adresa;
            employee.vrtic = req.body.vrtic || employee.vrtic;
            employee.email = req.body.email || employee.email;
            employee.telefon = req.body.telefon || employee.telefon;

            const updateEmployee = await employee.save();

            res.status(200).json(updateEmployee)
        }

    } catch (err) { console.log(err); }
})

//brisanje profesora po id-ju
router.delete("/employee/:id", async (req, res) => {

    try {
        const id = req.params.id
        const employee = await Employee.findByIdAndDelete(id);

        res.status(200).json("User je obrisan!")


    } catch (err) { console.log(err); }
})
//postavi vrtic
router.post("/kindergartens", async (req, res) => {

    const { name, code, address:{city,cityhall,street}, phone, email, manager } = req.body
    const kindergartens = new Kindergartens({
        name, code, address:{city,cityhall,street}, phone, email, manager
    })
    try {
        const ubacen = await kindergartens.save()
        res.status(201).json(ubacen)
    } catch (err) {
        console.log(err);
    }
})

//dohvati sve vrtice
router.get("/kindergartens", async (req, res) => {
    try {

        const kindergartens = await Kindergartens.find({});
        res.json(kindergartens)

    } catch (err) {
        console.log(err);
    }

})

//dohvati vrtic po id-ju
router.get("/kindergartens/:id", async (req, res) => {
    try {

        const id = req.params.id
        const kindergartens = await Kindergartens.findById(id);
        if (kindergartens) res.status(201).json(kindergartens)

    } catch (err) {
        console.log(err);
    }

})

//update vrtic
router.put("/kindergartens/:id", async (req, res) => {

    try {
        const id = req.params.id
        const kindergartens = await Kindergartens.findById(id);
        if (kindergartens) {
            kindergartens.name = req.body.name || kindergartens.name;
            kindergartens.code = req.body.code || kindergartens.code;
            kindergartens.address.city = req.body.address.city || kindergartens.address.city;
            kindergartens.address.cityhall = req.body.address.cityhall || kindergartens.address.cityhall;
            kindergartens.address.street = req.body.address.street || kindergartens.address.street;
            kindergartens.phone = req.body.phone || kindergartens.phone;
            kindergartens.email = req.body.email || kindergartens.email;
            kindergartens.manager = req.body.manager || kindergartens.manager;

            const updateUser = await kindergartens.save();

            res.status(200).json(updateUser)
        }

    } catch (err) { console.log(err); }
})
//brisanje vrtica po id-ju
router.delete("/kindergartens/:id", async (req, res) => {

    try {
        const id = req.params.id
        const kindergartens = await Kindergartens.findByIdAndDelete(id);

        res.status(200).json("User je obrisan!")


    } catch (err) { console.log(err); }
})

//postavi opstine
router.post("/cityhall", async (req, res) => {

    const { name, sifra, contact } = req.body
    const cityhall = new Cityhall({
        name, sifra, contact
    })

    try {
        const ubacen = await cityhall.save()
        res.status(201).json(ubacen)
    } catch (err) {
        console.log(err);
    }
})
//dohvati sve opstine
router.get("/cityhall", async (req, res) => {
    try {

        const cityhall = await Cityhall.find({});
        res.json(cityhall)

    } catch (err) {
        console.log(err);
    }

})



export default router



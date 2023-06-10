import express from "express"
import cors from "cors"
import connection from "./config/db.js"
import router from "./routers/Routes.js"

const app = express()
connection()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use("/api", router)


app.listen(PORT, () => {
    console.log("Uspesno konektovanje");
})

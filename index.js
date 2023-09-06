import express from "express"
import cors from "cors"
import connection from "./config/db.js"
import router from "./routers/Routes.js"

const app = express()
connection()

const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: "https://english-school.onrender.com",
    optionsSuccessStatus: 200,
  };
app.use(express.json())


app.use(cors(corsOptions))

app.use("/api", router)


app.listen(PORT, () => {
    console.log("Uspesno konektovanje");
})

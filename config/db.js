import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({path:".env"})
const conection = async ()=>{
const password = process.env.PASSWORD
    try{
        mongoose.connect(`mongodb+srv://english-school:${password}@english-school.5ysj6mu.mongodb.net/`,{

            
            // useNewUrlParser:true,
            // useUnifedTopology:true
        })

    }catch(err){
        console.log(err);
    }
}
export default conection
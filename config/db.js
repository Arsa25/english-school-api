import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({path:".env"})
const conection = async ()=>{
const mongodbURL = process.env.MONGODB_URL
    try{
        mongoose.connect(`${mongodbURL}`,{

            
            // useNewUrlParser:true,
            // useUnifedTopology:true
        })

    }catch(err){
        console.log(err);
    }
}
export default conection
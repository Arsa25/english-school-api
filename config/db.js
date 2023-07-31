import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const conection = async ()=>{

    try{
        await mongoose.connect(process.env.DATABASE_URL),{

            
            // useNewUrlParser:true,
            // useUnifedTopology:true
        }

    }catch(err){
        console.log(err);
    }
}
export default conection
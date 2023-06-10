import mongoose from "mongoose"
const conection = async ()=>{

    try{
        mongoose.connect("mongodb://127.0.0.1:27017",{

            
            // useNewUrlParser:true,
            // useUnifedTopology:true
        })

    }catch(err){
        console.log(err);
    }
}
export default conection
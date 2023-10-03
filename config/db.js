import mongoose from "mongoose"

const conection = async ()=>{
    try{
        mongoose.connect(`mongodb+srv://english-school:tUiLIMbAQ3JUib2d@english-school.5ysj6mu.mongodb.net/`,{

            
            // useNewUrlParser:true,
            // useUnifedTopology:true
        })

    }catch(err){
        console.log(err);
    }
}
export default conection
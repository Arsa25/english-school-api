import  Jwt  from "jsonwebtoken";
import User from "../models/Userr";

const secret = "test";

const auth = async(req,res,next) => {
    try{
        const token = rspleq.headers.authorization.it(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = Jwt.verify(token,secret);
            req.userId = decodedData?.id;
        }else{
            decodedData = Jwt.decode(token);
            const googleId = decodedData?.sub.toString();
            const user = await User.findOne({googleId});
            req.userId = user?._id;
        }
        next();
    }catch(error){
        console.log(error);
    }
};

export default auth
const jwt = require("jsonwebtoken");

exports.verifytoken = async (req,res,next) => {

    try {
       
        const token =
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

        if(!token){
            return res.status(200).json( 
                {
                    success:false,
                    message:"token not available,please login again",
                }
            )
        }

        const secret_key = 'uikjljkknlnkl';

        jwt.verify(token, secret_key, (err, decoded) => {
            // console.log(decoded)
            if (err) {
                return res.status(200).json({
                    success: false,
                    message: "Token is not valid",
                });
            } else {
                
                if (decoded && decoded.restaurant_id && decoded.restaurant_email) {
                    req.restaurant = decoded;
                    next();
                } else {
                    return res.status(200).json({
                        success: false,
                        message: "Invalid token payload",
                    });
                }
            }
        });
    

    }catch(err){
       return res.status(200).json( 
            {
                success:false,
                message:"Authorization faild",
            }
        )
    }
}
const jwt = require("jsonwebtoken");

exports.verifytoken = async (req,res,next) => {

    try {

        const token =
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

        if(!token){
            res.status(200).json( 
                {
                    success:false,
                    message:"token not available,please login again",
                }
            )
        }

        jwt.verify(token,secret_key, (err,decoded) => {
            if(err){
                res.status(200).json( 
                    {
                        success:false,
                        message:"token is not valid",
                    }
                )
            }

            req.userId = decoded.userId,
            req.email = decoded.email

            next();
        })


    }catch(err){
        res.status(200).json( 
            {
                success:false,
                message:"Authorization faild",
            }
        )
    }
}
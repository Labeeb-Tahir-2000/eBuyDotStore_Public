const AppError = require("../utilits/appError")

const handleJWTError=()=>{ // making instance of Error class with better error message that instance will be returned to be used in error responce to send
  return new AppError('Invalid Token! please Log in again ', 401)
}

const handleJWTExpireError=()=>{ // making instance of app Error class with better error message that instance will be returned to be used in error responce to send
    return new AppError('Token has Expired! please Log in again ', 401)
}

const sendDevError =(err,res)=>{
    console.log(err.status, err.statusCode ," ",err.message);
    res.status(err.statusCode).json({
        status:err.status,
         message:  err.message,
         stack: err.stack,
    })
}
const sendProError=(err,res)=>{
    console.log(err.status, err.statusCode ," ",err.message);
    if(err.isOperational){//validation or other errors except programming errors e.g server error,validation, connection etc so send less info to user
        res.status(err.statusCode).json({
            status:err.status,
            statusCode:err.statusCode,
             message: err.message,
             stack: err.stack,
        })
    }
    else{
        console.log("this is production error"+err);
        res.status(500).json({ // pogramming errors so console them
            status:err.status,
             message: err.message,
    });}
    }


module.exports = (err,req,res,next) =>{
// this is global error handler middleware function that wiil call on every 'next(err)' 
//  think it doesnot called on each next(). it runs on each error cathed by catch(), which is catched becuase of catchAsync rapers'try() catch() block' and here we will give status and message to error by lokking it its type and name 
// for example called by catchAsync function without statuse and error code but when called by AppError class which is extended by Error class 
// this class will give error code and statuse by making instance of it and calling its constructors.
    err.message = err.message;
    err.status = err.status  || 'error';
    err.statusCode = err.statusCode || 500;

    console.log('this is error calling from error controller class'+err.name+ err.statusCode)
    if(process.env.NODE_ENV === 'development'){
        sendDevError(err,res);
    }

    if(process.env.NODE_ENV === 'production'){
        let error = { ...err }; // hard copying of err object
        
    console.log('this is error name'+error.name)
        if(error.name === 'JsonWebTokenError') error = handleJWTError(error); //caling function that will return instance of appError class
        if(error.name === 'TokenExpiredError') error = handleJWTExpireError(error);//caling function that will return instance of appError class
        sendProError(error,res);
    }
}

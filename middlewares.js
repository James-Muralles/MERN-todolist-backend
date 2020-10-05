// creates not found error, sets 404 and then forwarding to error handler
const notFound = (req, res, next) =>{
    const error = new Error(`Not Found - ${req.orginalUrl}`);
    res.status(404);
    next(error);
};
//error handler middle wares must have 4 parameters
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? ':pancakes:' : error.stack,
    });
};
//export middlewares to use in index.js
module.exports = {
    notFound,
    errorHandler,
};

const { StatusCodes } = require("http-status-codes")

const checkLoginMiddleware = (req, _res, next) => {
    console.log("MIDDLEWARE", req.body);
    if (!req.body.password || !req.body.email) throw new Error('Error.message');
    next();
};

module.exports = checkLoginMiddleware;
const { StatusCodes } = require("http-status-codes")

const checkHomeMiddleware = (req, _res, next) => {

    console.log(req.params.id);
    if (req.params.id.length < 2) throw new Error('Id inválido HOME');
    if (!req.params.id) throw new Error('ESSE AQUI');
    next();
};

module.exports = checkHomeMiddleware;
const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const checkLoginMiddleware= require('../middlewares/checkLoginMiddleware');

const loginRoute = Router();

loginRoute.post('/login', checkLoginMiddleware, (req, res) => {
    console.log("success", req.body);
    return res.status(StatusCodes.CREATED).json('Login efetuado com sucesso');
});

module.exports = loginRoute;
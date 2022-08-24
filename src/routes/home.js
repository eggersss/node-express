const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const checkHomeMiddleware = require('../middlewares/checkHomeMiddleware');

const homeRoute = Router();

homeRoute.get('/:id', checkHomeMiddleware, (_req, res) => {
   return res.status(StatusCodes.OK).json('OIE')
});

module.exports = homeRoute;
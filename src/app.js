const express = require('express');
require('express-async-errors'); // EXPRESS ASYNC ERRORS LIB
const homeRoute = require('./routes/home');
const loginRoute = require('./routes/login');


const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/home', homeRoute);
app.use(loginRoute);


app.use((err, _req, res, next) => { // ASYNC errors lib
    if (err.message) {
      res.status(403).json({ error: err.message });
    }
    next(err);
  });

app.listen(PORT, () => console.log(`Online on port: ${PORT}`));

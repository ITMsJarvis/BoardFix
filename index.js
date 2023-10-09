const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const boardsRoute = require('./routes/Boards');

app.use('/', boardsRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});

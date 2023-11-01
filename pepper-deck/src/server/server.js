const router = require('./routes/Router');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;




module.exports = app.listen(PORT, () => console.log('Listening in on PORT: ', PORT));
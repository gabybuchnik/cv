const express  = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port , ()=> console.log(`listen to port  ${port}`));
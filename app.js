const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path')
const { addPage, editPage, main, userList, userPages, wikipage, layout } = require('./views/index.js');

const { db } = require('./models');


app.use(express.urlencoded({extended: false}));

const staticMiddleware = express.static(path.join(__dirname, './public'));
app.use(staticMiddleware);

app.get('/', (req, res) => {
    res.send('hello world');
});


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


const port = 3000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

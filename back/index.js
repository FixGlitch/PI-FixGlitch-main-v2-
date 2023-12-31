const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./src/routes/index');
const PORT = 3001;
const { conn } = require('./src/DB_connection');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

conn.sync({ alter : true }).then(() => {
  app.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
  });
});

module.exports = app;
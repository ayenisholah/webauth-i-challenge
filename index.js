const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const Users = require('./users/users-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.Port || 7777;
server.listen(port, () => console.log(`\n >>>> Magic happening on 7777 <<<< \n`));
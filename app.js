const axios = require('axios');
const express = require('express');
require('dotenv').config();
const pgp = require('pg-promise')();
const writeToDatabase = require('./Database');

const app = express()
const port = 3000

const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/postgres`);

app.get('/', async (req, res) => {

  const axiosResponse = await axios.get('https://randomuser.me/api/');

  const result = await writeToDatabase(axiosResponse.data.results, db);

  res.send(result);
});

app.listen(port, () => {
  console.log(`Listen port ${port}`)
});

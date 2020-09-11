const express = require('express');
const axios = require('axios');

const router = express.Router();

const explorer = axios.create({
  baseURL: process.env.EXPLORER_URL,
  timeout: 15000,
});

router.get('/networklist', async (req, res) => {
  try {
    const { data } = await explorer.get('/auth/networklist');
    res.send(data);
  } catch (exception) {
    throw exception;
  }
});

module.exports = router;

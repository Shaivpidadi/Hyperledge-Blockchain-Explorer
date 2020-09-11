const express = require('express');
const axios = require('axios');

const { sendResponse } = require('../common/requestHandlers');
const router = express.Router();

const explorer = axios.create({
  baseURL: process.env.EXPLORER_URL,
  timeout: 15000,
});

router.post('/login', async (req, res) => {
  try {
    const { user, password, network } = req.body;
    const { data } = await explorer.post('/auth/login', {
      user,
      password,
      network,
    });
    res.send(data);
  } catch (exception) {
    throw exception;
  }
});

router.get('/networklist', async (req, res) => {
  try {
    const { data } = await explorer.get('/auth/networklist');
    sendResponse(res, true, 200, data);
  } catch (exception) {
    sendResponse(res, false, 404, exception.message);
  }
});

module.exports = router;

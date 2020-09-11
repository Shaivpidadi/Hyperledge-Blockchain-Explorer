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
    sendResponse(res, 404, false, exception.message);
  }
});

router.get('/networklist', async (req, res) => {
  try {
    const { data } = await explorer.get('/auth/networklist');
    sendResponse(res, 404, true, 'Network List', data);
  } catch (exception) {
    sendResponse(res, 404, false, exception.message);
  }
});

router.get('/channels', async (req, res) => {
  const authToken = req.headers['Authorization'];
  try {
    let config = {
      headers: {
        Authorization: `bearer ${authToken}`,
      },
    };

    const { data } = await explorer.get('/api/channels', config);
    res.send(data);
  } catch (exception) {
    sendResponse(res, 404, false, exception.message);
  }
});

module.exports = router;

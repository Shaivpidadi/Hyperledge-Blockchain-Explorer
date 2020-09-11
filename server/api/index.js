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
    sendResponse(res, 200, true, 'Network List', data);
  } catch (exception) {
    sendResponse(res, 401, false, exception.message);
  }
});

router.get('/channels', async (req, res) => {
  const authToken = req.headers['authorization'] || '';
  try {
    let config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get('/api/channels', config);
    res.send(data);
  } catch (exception) {
    sendResponse(res, 401, false, exception.message);
  }
});

router.get('/channels/info', async (req, res) => {
  const authToken = req.headers['authorization'] || '';
  try {
    let config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get('/api/channels/info', config);
    res.send(data);
  } catch (exception) {
    sendResponse(res, 404, false, exception.message);
  }
});

router.get('/status/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    let config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `/api/status/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch (exception) {
    sendResponse(res, 401, false, exception.message);
  }
});

router.get('/channel/curChannel', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    let config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get('api/curChannel', config);
    res.send(data);
  } catch (exception) {
    sendResponse(res, 401, false, exception.message);
  }
});

router.get(
  '/channel/getChangeChannel/:channelGenesisHash',
  async (req, res) => {
    try {
      const authToken = req.headers['authorization'] || '';
      const { channelGenesisHash } = req.params;
      let config = {
        headers: {
          Authorization: authToken,
        },
      };

      const { data } = await explorer.get(
        `api/channel/getChangeChannel/${channelGenesisHash}`,
        config,
      );
      res.send(data);
    } catch (exception) {
      sendResponse(res, 401, false, exception.message);
    }
  },
);

router.get('/peer/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    let config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/peer/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch (exception) {
    sendResponse(res, 401, false, exception.message);
  }
});

router.get('/chaincode/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    let config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/chaincode/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch (exception) {
    sendResponse(res, 401, false, exception.message);
  }
});
module.exports = router;

/* eslint-disable dot-notation */
const express = require('express');
const axios = require('axios');

const { sendResponse } = require('../common/requestHandlers');
const router = express.Router({ mergeParams: true });

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
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/networklist', async (req, res) => {
  try {
    const { data } = await explorer.get('/auth/networklist');
    sendResponse(res, 200, true, 'Network List', data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/channels', async (req, res) => {
  const authToken = req.headers['authorization'] || '';
  try {
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get('/api/channels', config);
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/channels/info', async (req, res) => {
  const authToken = req.headers['authorization'] || '';
  try {
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get('/api/channels/info', config);
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/status/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `/api/status/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/channel/curChannel', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get('api/curChannel', config);
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get(
  '/channel/getChangeChannel/:channelGenesisHash',
  async (req, res) => {
    try {
      const authToken = req.headers['authorization'] || '';
      const { channelGenesisHash } = req.params;
      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const { data } = await explorer.get(
        `api/channel/getChangeChannel/${channelGenesisHash}`,
        config,
      );
      res.send(data);
    } catch ({ response }) {
      sendResponse(res, response.status, false, response.statusText);
    }
  },
);

router.get('/peer/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/peer/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/chaincode/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/chaincode/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/block/blockActivity/:channelGenesisHash', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/blockActivity/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/block/:channelGenesisHash/:number', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash, number } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/block/${channelGenesisHash}/${number}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get(
  '/block/blocksByMinute/:channelGenesisHash/:hours',
  async (req, res) => {
    try {
      const authToken = req.headers['authorization'] || '';
      const { channelGenesisHash, hours } = req.params;
      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const { data } = await explorer.get(
        `api/blocksByMinute/${channelGenesisHash}/${hours}`,
        config,
      );
      res.send(data);
    } catch ({ response }) {
      sendResponse(res, response.status, false, response.statusText);
    }
  },
);

router.get(
  '/block/blocksByHour/:channelGenesisHash/:days',
  async (req, res) => {
    try {
      const authToken = req.headers['authorization'] || '';
      const { channelGenesisHash, days } = req.params;
      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const { data } = await explorer.get(
        `api/blocksByHour/${channelGenesisHash}/${days}`,
        config,
      );
      res.send(data);
    } catch ({ response }) {
      sendResponse(res, response.status, false, response.statusText);
    }
  },
);

router.get('/transaction/:channelGenesisHash/:txId', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash, txId } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/transaction/${channelGenesisHash}/${txId}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get(
  '/block/transactions/:channelGenesisHash/:number',
  async (req, res) => {
    try {
      const authToken = req.headers['authorization'] || '';
      const { channelGenesisHash, number } = req.params;
      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const { data } = await explorer.get(
        `api/block/transactions/${channelGenesisHash}/${number}`,
        config,
      );
      res.send(data);
    } catch ({ response }) {
      sendResponse(res, response.status, false, response.statusText);
    }
  },
);

router.get(
  '/transactions/list/:channelGenesisHash/:number/:txId',
  async (req, res) => {
    try {
      const authToken = req.headers['authorization'] || '';
      const { channelGenesisHash, number, txId } = req.params;
      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const isQueryParameterAdded = !!Object.keys(req.query).length;

      let queryParameters = '';
      Object.entries(req.query).forEach(([key, value], index) => {
        queryParameters += `${key}=${value}${
          index === Object.keys(req.query).length - 1 ? '' : '&&'
        }`;
      });

      const { data } = await explorer.get(
        `api/txList/${channelGenesisHash}/${number}/${txId}${
          isQueryParameterAdded ? `?${queryParameters}` : ''
        }`,
        config,
      );
      res.send(data);
    } catch ({ response }) {
      sendResponse(res, response.status, false, response.statusText);
    }
  },
);

router.get('/blockAndtxList/:channelGenesisHash/:number', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash, number } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const isQueryParameterAdded = !!Object.keys(req.query).length;

    let queryParameters = '';
    Object.entries(req.query).forEach(([key, value], index) => {
      queryParameters += `${key}=${value}${
        index === Object.keys(req.query).length - 1 ? '' : '&&'
      }`;
    });

    const { data } = await explorer.get(
      `api/blockAndtxList/${channelGenesisHash}/${number}${
        isQueryParameterAdded ? `?${queryParameters}` : ''
      }`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/txByMinute/:channelGenesisHash/:hours', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash, hours } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/txByMinute/${channelGenesisHash}/${hours}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/txByHour/:channelGenesisHash/:days', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash, days } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/txByHour/${channelGenesisHash}/${days}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

router.get('/txByOrg/:channelGenesisHash/', async (req, res) => {
  try {
    const authToken = req.headers['authorization'] || '';
    const { channelGenesisHash } = req.params;
    const config = {
      headers: {
        Authorization: authToken,
      },
    };

    const { data } = await explorer.get(
      `api/txByOrg/${channelGenesisHash}`,
      config,
    );
    res.send(data);
  } catch ({ response }) {
    sendResponse(res, response.status, false, response.statusText);
  }
});

module.exports = router;

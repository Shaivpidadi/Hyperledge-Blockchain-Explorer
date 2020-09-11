const sendResponse = async (res, status, success, message, data = '') => {
  res.writeHead(status, { 'Content-Type': 'application/json' });

  res.write(
    JSON.stringify({
      status,
      success,
      message,
      data,
    }),
  );

  res.end();
};

module.exports = { sendResponse };

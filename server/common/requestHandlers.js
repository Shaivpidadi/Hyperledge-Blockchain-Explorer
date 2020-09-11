const sendResponse = async (res, status, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });

  res.write(
    JSON.stringify({
      status,
      data,
    }),
  );

  res.end();
};

module.exports = { sendResponse };

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware')

require('dotenv').config();

const deliverHost = process.env.DELIVER_HOST;
const submitHost = process.env.SUBMIT_HOST;
const moderateHost = process.env.MODERATE_HOST;

const app = express();
const PORT = process.env.PORT || 7000;

app.use('/api/deliver', createProxyMiddleware({ target: deliverHost, changeOrigin: true }));

app.use('/api/submit', createProxyMiddleware({ target: submitHost, changeOrigin: true }));

app.use('/api/moderate', createProxyMiddleware({ target: moderateHost, changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`API Gateway running on http://localhost:${PORT}`);
});

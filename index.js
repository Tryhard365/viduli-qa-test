const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('<h1>Build Successful!</h1>'));
app.get('/status', (req, res) => res.json({ status: 'online', env: process.env.QA_TEST || 'none' }));
app.listen(port);

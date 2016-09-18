'use strict';

const express = require('express');
const app = express();
const port = 3000;

const talkService = require('./service.talk');

app.get('/', (req, res) => res.status(200).json({name: 'hello'}));

app.get('/talks', (req, res) => talkService.findByType(req.query.type).then(results => res.status(200).json(results)));

app.listen(port, () => console.log(`Xebicon/NodeJS running on port ${port}`));

module.exports = app;

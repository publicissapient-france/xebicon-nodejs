'use strict';

const express = require('express');
const app = express();
const port = 3000;

const talks = require('./db.talks');

app.get('/', (req, res) => res.status(200).json({name: 'hello'}));

app.get('/talks', (req, res) => talks.list().then(results => res.status(200).json(results)));

app.listen(port, () => console.log(`Xebicon/NodeJS running on port ${port}`));

module.exports = app;

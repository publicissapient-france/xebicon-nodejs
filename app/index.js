'use strict';

// region require

const express = require('express');
const app = express();
const port = 3000;

// endregion

// region talk service

const TalkService = require('./service.talk');

// endregion

// region API /talks

// app.get('/talks', (req, res) => TalkService.findByType(req.query.type).then(results => res.status(200).json(results)));

// endregion

app.listen(port, () => console.log(`Xebicon/NodeJS running on port ${port}`));

module.exports = app;
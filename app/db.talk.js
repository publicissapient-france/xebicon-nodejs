const Promise = require('bluebird');

const slots = require('./slots.json');

const talk = {};

talk.list = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(slots);
        }, 2000);
    });

module.exports = talk;
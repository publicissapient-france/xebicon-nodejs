const Promise = require('bluebird');

const slots = require('./slots.json');

const talks = {};

talks.list = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(slots);
        }, 2000);
    });

module.exports = talks;
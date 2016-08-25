const Promise = require('bluebird');

const talks = {};

talks.list = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {title: 'Node.js comment faire un projet dans les règle de l\'art ?', type: 'craft'},
                {title: 'Plan de bataille pour devenir une entreprise Data Driven', type: 'data'},
                {title: 'React Native + Flow, une complémentarité hors du commun', type: 'front'},
                {title: 'Advanced querying with Elastic Search', type: 'back'}
            ]);
        }, 2000);
    });

module.exports = talks;
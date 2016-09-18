'use strict';

const app = require('../app/index');
const request = require('supertest')(app);
const TalkDb = require('../app/db.talk');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('Integration Tests', () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => sandbox.restore());

    it('should GET / and return hello', (done) => {
        sandbox.stub(TalkDb, 'list').returns(Promise.resolve([
            {title: 'Plan de bataille pour devenir une entreprise Data Driven', type: 'data'},
            {title: 'React Native + Flow, une complémentarité hors du commun', type: 'front'}
        ]));


        request
            .get('/talks?type=data')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if (err) {
                    return done(err);
                }
                console.log(response.body);
                expect(response.body).to.have.length(1);
                done();
            });

    });
});
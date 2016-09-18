'use strict';

// region app
const app = require('../app/index');
const request = require('supertest')(app);
// endregion

// region db
const TalkDb = require('../app/db.talk');
// endregion

// region expect and sinon
const sinon = require('sinon');
const expect = require('chai').expect;
// endregion

describe('Integration Tests', () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => sandbox.restore());

    it('should GET / and return slots', done => {
        sandbox.stub(TalkDb, "list").returns(Promise.resolve([
            {title: 'Plan de bataille pour devenir une entreprise Data Driven', type: 'data'},
            {title: 'React Native + Flow, une complémentarité hors du commun', type: 'front'}
        ]));
        // region request
        // request
        //     .get('/talks?type=data')
        //     .expect('Content-Type', /json/)
        //     .expect(200)
        //     .end((err, response) => {
        //         if (err) {
        //             return done(err);
        //         }
        //         console.log(response.body);
        //         expect(response.body).to.have.length(1);
        //         done();
        //     });
        // endregion
        // TODO request API
    });
});

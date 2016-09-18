const expect = require('chai').expect;
//const sinon = require('sinon');

const TalkService = require('../app/service.talk');
const TalkDb = require('../app/db.talk');

describe('Talk service', () => {

    describe('Query', () => {

        it('Get talk by type without mock', function (done) {
            // GIVEN
            this.timeout(3000);

            // WHEN
            // INSERT CODE HERE
        });

        /*
         let sandbox;

         beforeEach(() => {
         sandbox = sinon.sandbox.create();
         });

         afterEach(() => sandbox.restore());

         it('Get talk by type with mock', done => {
            // GIVEN
            const list = sandbox.stub(TalkDb, 'list').returns(Promise.resolve([
                {title: 'Plan de bataille pour devenir une entreprise Data Driven', type: 'data'},
                {title: 'React Native + Flow, une complémentarité hors du commun', type: 'front'}
            ]));

            // WHEN
            // INSERT CODE HERE
        });
        */
    });
});
const expect = require('chai').expect;

// region sinon
// endregion

const TalkService = require('../app/service.talk');
const TalkDb = require('../app/db.talk');

describe('Talk service', () => {

    describe('Query', () => {

        it('Get talks by type without mock', function (done) {
            this.timeout(3000);
            // region ut
            // endregion
        });

        //region mock
        /*
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.sandbox.create();
        });

        afterEach(() => sandbox.restore());

        it('Get talks by type with mock', done => {
            const list = sandbox.stub(TalkDb, 'list').returns(Promise.resolve([
                {title: 'Plan de bataille pour devenir une entreprise Data Driven', type: 'data'},
                {title: 'React Native + Flow, une complémentarité hors du commun', type: 'front'}
            ]));
            // region utmock
            utmock
            // endregion
        });
        */
        // endregion

    });
});
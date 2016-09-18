'use strict';

// region app
// endregion

// region db
// endregion

// region expect and sinon
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
        // endregion
        // TODO request API
    });
});

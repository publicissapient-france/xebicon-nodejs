const TalkDb = require('./db.talk');

const TalkService = {};

TalkService.findByType = type => {
    const results = [];
    return TalkDb.list()
        .then(talks => {
            talks.forEach(talk => {
                if (!talk.type) {
                    results.push(talks);
                } else if (talk.type === type) {
                    results.push(talk);
                }
            });
            return results;
        });
};

TalkService.findAll = TalkDb.list;

module.exports = TalkService;
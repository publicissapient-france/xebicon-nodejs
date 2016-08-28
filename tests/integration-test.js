'use strict';

//const request = require('supertest')('http://localhost:3000');
const app = require('../app/index');
const request = require('supertest')(app);

describe('Integration Tests', () => {
   it('should GET / and return hello', (done) => {
       request
           .get('/')
           .expect('Content-Type', /json/)
           .expect('Content-Length', '16')
           .expect(200, {name: 'hello'})
           .end(done);
   });
});


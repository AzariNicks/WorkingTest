const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const fs = require('fs');
const path = require('path')
const app = require('./testServer');

describe('Server', () => {
    it('should return the HTML file for the root endpoint', (done) => {
        request(app)
          .get('/')
          .expect('Content-Type', 'text/html; charset=UTF-8')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
      
            const expectedHtml = fs.readFileSync(path.join(__dirname, '/test.html'), 'utf8');
            expect(res.text).to.equal(expectedHtml);
            done();
          });
      });

  it('should return the test.js file for the /js endpoint', (done) => {
    request(app)
      .get('/js')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200, done);
  });

  it('should return the test.css file for the /style endpoint', (done) => {
    request(app)
      .get('/style')
      .expect('Content-Type', 'text/css; charset=UTF-8')
      .expect(200, done);
  });
});
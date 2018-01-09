const Nightmare = require('nightmare');
const assert = require('assert');

describe('test login', function () {

  this.timeout('30s');
  let nightmare = null;

  beforeEach(() => {
    nightmare = new Nightmare({ width: 1600});
  });


  describe('/ (Home Page)', () => {
    it('should load without error', function (done) {

      nightmare.goto('https://urbania.pe/').end()
        .then(function (result) {
          assert.ok(true);
          done();
        })
        .catch(function (error) {
          done(new Error('web page not loaded'));
        });
    });

    it('login into webpage using a registered user', function (done){

      nightmare.goto('https://urbania.pe/')
      .click('a#lnkLogin')
      .wait('div#modalLoginUrbania')
      .type('input#email','pantano_m18@hotmail.com')
      .type('input#clave','123456')
      .click('input[name=btnLogin]')
      .evaluate(function() {
        console.log('login up done');
      })
      .wait('div.e-name-user')
      .screenshot('result.png')
      .end()
        .then(function (result) {
          assert.ok(true,'detected user name');
          done();
        })
        .catch(function (error) {
          done(new Error('not loaded'));
        });
    });
  });
}); 
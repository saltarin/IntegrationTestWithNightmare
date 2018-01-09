const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true, width: 1600})
/*
nightmare
  .goto('http://urbania.pe/')
  .end()
    .then(function (result) {
      console.log('ok');
      console.log(result);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
*/

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
        console.log('login complete');
        console.log(result);
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
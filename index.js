'use strict'
const request = require('superagent');
var interval = setInterval(function() {
  request
  .get('https://assistant.google.com/services/auth/handoffs/auth/start?account_name=asdagrocery@gmail.com&provider=groceryapp-b4d9c_dev&scopes=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/calendar&return_url=https://www.google.com/')
  .then(function(res) {
    console.log('Request Successfull',abc)
  });
}, 600000);

// 'use strict'
// const request = require('superagent');
// var interval = setInterval(function() {
//   request
//   .get('https://assistant.google.com/services/auth/handoffs/auth/start?account_name=asdagrocery@gmail.com&provider=groceryapp-b4d9c_dev&scopes=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/calendar&return_url=https://www.google.com/')
//   .then(function(res) {
//     console.log('Request Successfull')
//   });
// }, 600000);

'use strict'
const request = require('superagent')
    , express = require('express')
    , bodyParser = require('body-parser')
    , app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var interval = setInterval(function() {
  request
  .get('https://assistant.google.com/services/auth/handoffs/auth/start?account_name=asdagrocery@gmail.com&provider=groceryapp-b4d9c_dev&scopes=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/calendar&return_url=https://www.google.com/')
  .then(function(res) {
    console.log('Request Successfull')
    console.log('Response --> ', res)
  });
}, 6000);

app.get('/testServer', function(req, res) {
  console.log('Server Running')
});

app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

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

const google = require('googleapis')
    , calendar = google.calendar('v3')
    , OAuth2 = google.auth.OAuth2
    , clientId = '357369265143-8j0kor1bbl87h7houkt5qbt76r9keg5l.apps.googleusercontent.com'
    , clientSecret = 'E047ajWFZ5MiobPR_7WRrvXx'
    , redirect = 'https://oauth-redirect.googleusercontent.com/r/groceryapp-b4d9c'
    , accessToken = 'ya29.Gl1DBdk65SZW_kMEm613vZ5ZtdePP-nGI-fHxvsucSyLNe0jaNc2vx7UfnwiRp0E48t8fGsFHCEOhK6yz1kMG2K7oNlNR1m1RqthScEmdyJbcsG0agI3zHUBrHUToxI'
    , oauth2Client = new OAuth2(clientId, clientSecret, redirect);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

oauth2Client.setCredentials({
    access_token:accessToken
});

var interval = setInterval(function() {
  request
  .get('https://assistant.google.com/services/auth/handoffs/auth/start?account_name=asdagrocery@gmail.com&provider=groceryapp-b4d9c_dev&scopes=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/calendar&return_url=https://www.google.com/')
  .then(function(res) {
    console.log('Request Successfull')
  });
}, 6000);

app.get('/testServer', function(req, res) {
  console.log('Server Running')
});

app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

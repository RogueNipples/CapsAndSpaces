var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex = /\b\S{10,}\b/;
	var botRegex2 = /[N,n]ut/;
  var response;
  
  if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("N U T");
    this.res.end();
  }
  
  
  
  if (Math.floor(Math.random()*1.2)){
  if(request.text && botRegex.test(request.text)) {
	  
	  {
      var substring = request.text.match(/\b\S{10,}\b/);
  }
  
  response = substring[0].split('').join(' ').toUpperCase();
	  
	  
	  
    this.res.writeHead(200);
    postMessage(response);
    this.res.end();
  }
  }
  
}

function postMessage(input) {
  var botResponse, options, body, botReq;

  botResponse = input;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;

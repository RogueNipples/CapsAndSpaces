var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var ayyRegex = /^yee$/;
  
  
if (request.name != "yee") {
  if(request.text && !ayyRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("yee");
    this.res.end();
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

//========================================================================================================

function postMessage2() {
  var botResponse, options, body, botReq;

  var textuals = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        textuals += possible.charAt(Math.floor(Math.random() * possible.length));
  
  var stringerino = "http://i.imgur.com/";
  var string2 = ".png";
  var penultimate = stringerino.concat(textuals);
  var ultimate = penultimate.concat(string2);
  
  botResponse = ultimate;

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

//========================================================================================================

//==========================================================================================================

function postMessage3() {
  var botResponse, options, body, botReq;

  var textuals = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        textuals += possible.charAt(Math.floor(Math.random() * possible.length));
  
  var randomnum = Math.floor((Math.random() * 60) + 1);
  if (randomnum > 59)
    {
        botResponse = "DUMPSTERED";
    }
    else if (randomnum > 58)
    {
        botResponse = "BANOODLED";
    }
  else if (randomnum > 57)
    {
        botResponse = "CUCKED";
    }
  else if (randomnum > 56)
    {
        botResponse = "PUT IN THE GROUND";
    }
  else if (randomnum > 55)
    {
        botResponse = "RIP IN RESTERONI";
    }
  else if (randomnum > 54)
    {
        botResponse = "DOOTED";
    }
  else if (randomnum > 53)
    {
        botResponse = "WEWLAD'D";
    }
  else if (randomnum > 52)
    {
        botResponse = "OOGA BOOGA'D";
    }
  else if (randomnum > 51)
    {
        botResponse = "ENDED";
    }
  else if (randomnum > 50)
    {
        botResponse = "REST IN RIPPERONI";
    }
  else botResponse = "Miss!"
  

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

//=======================================================================================

function postMessage4() {
  var botResponse, options, body, botReq;

  var textuals = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        textuals += possible.charAt(Math.floor(Math.random() * possible.length));
  
  var stringerino = "http://i.imgur.com/";
  var string2 = ".png";
  var penultimate = stringerino.concat(textuals);
  var ultimate = penultimate.concat(string2);
  
  
  var poopy;
  var dingus = [];
  for (poopy =  0; poopy < 50; poopy++)
  {
  dingus[poopy] = cool();
  }

  botResponse = (dingus.toString()).replace(/,/g, '\n');
  
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

function postMessageSucc() {
  var botResponse, options, body, botReq;

  var randomnum = Math.floor((Math.random() * 50) + 1);

  if (randomnum > 26)
    {
        botResponse = "Succ.";
    }
    else if (randomnum > 2)
    {
        botResponse = "No succ.";
    }
  else
  {
    botResponse = "Zucc.";
  }
  
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

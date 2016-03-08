var express = require('express');
var http = require('http');
var app = express();

var options = {
	//52.73.212.80
	host: 'localhost',
   	port: 80,
   	path: '/info.php'
}

app.get('/', function(request, response){

	console.log('Getting GET Requests');
	console.log('Options: '+options);
	http.get(options, function(res){
		console.log('Response status', res.statusCode);
		//response.send(res.status);
	})

	response.send({message:'Ok!'});
});

app.listen('3000', function(){
	console.log('App is running');
});
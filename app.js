var cheerio = require('cheerio');
var request = require('request');

module.exports = function(){

	url = "https://powerful-tor-13817.herokuapp.com/live";

	request(url, function(error, response, html) {

	        if (!error) {

	            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

	            var $ = cheerio.load(html);

	            scores = JSON.parse($.text());
	            matches = scores['Matches'];

	            for(var i=0;i<matches.length;i++)
	            {
	            	console.log("Match" + (i+1) +":");
	            	console.log(matches[i]['Status']);
	            	console.log(matches[i]['Team A']);
	            	console.log(matches[i]['Team B'] + "\n");

	            }
	  		}
	  	});
}
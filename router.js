const mime = require("./mime.js");
const fs = require("fs");

function Router()//need to add capability to add, remove routes
{
	/*
	this.urls[];

	routes[] = route = {
		url: "",
		type: "",
		cb: cb
	};
	*/

	this.addRoute = function(route)
	{
		/*
		if(urls.indexOf(route.url) !== -1)//if this route does not already exist
		{
			//routes.push(route);
			//urls.push(route.url);
		}
		*/	
	}

	this.route = function(url)
	{
		/*
		if(urls.indexOf !== -1)
		{
			
		}
		else
		{
			//404
		}
		*/
	}
}

module.exports = Router;
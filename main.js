const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
const mime = require("./mime.js");//might not need, already in router.js
const router = require("./router.js");

//router.addRoute //do this for all default routes, index.html products.html etc
//mysql get data, router.addRoute // do this for all database routes

const PORT = 80;

http.createServer(handleRequest).listen(PORT, () => {
	console.log("server started on port " + PORT);
});

function handleRequest(req, res)
{
	/*

	*/
}
"use strict";

const Client = require("./Client");
const options = {
	port: 9432,
	host: "35.184.58.167",
	user: "Jose"
} 
const client =  new Client(options);
client.connect();
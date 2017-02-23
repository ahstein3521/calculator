const staticServer = require("static-server");

const server = new staticServer({
	port:8080,
	rootPath:"./dist"
})

server.start(()=> {
	console.log("Static server is running");
})
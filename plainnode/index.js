// import needed web server modules
const http = require('http');
const url = require('url');
// Function to handle requests and send responses
const requestListener = (req, res) => {
// Parse the URL
const parsedUrl = url.parse(req.url, true);
const path = parsedUrl.pathname;
// Set a default response
res.setHeader('Content-Type', 'text/plain');
// possible routes based on path
if (path === '/') {
res.statusCode = 200;
res.end('Welcome to the Home page!');
} else if (path === '/about') {
res.statusCode = 200;
res.end('This is the About page.');
} else if (path === '/contact') {
res.statusCode = 200;
res.end('This is the Contact page.');
} else {
res.statusCode = 404;
res.end('404 Not Found');
}
}; // end requestListener function
// Create the HTTP web server
const server = http.createServer( requestListener );
// Run the server and make it listen on port 3000
server.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
}
); // end server


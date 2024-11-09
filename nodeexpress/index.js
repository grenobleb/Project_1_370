// import the express module;
// make express object;
// choose server port
const express = require('express');
const app = express();
const port = 5000;
// Log requests
app.use( ( req, res, next ) => {
console.log(`${req.method} request for '${req.url}'`);
next();
}
);
// Error handling
app.use( ( err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
}
);
// Basic route
app.get('/', ( req, res ) => {
res.send('Hello, World!');
}
);
// Another route
app.get('/about', ( req, res ) => {
res.send('About Page');
}
);
// Start the web server
app.listen( port, () => {
console.log('Server is running on http://localhost:5000');
}
);


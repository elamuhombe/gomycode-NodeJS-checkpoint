// Import the 'http' module, which provides functionality for creating HTTP servers
const http = require('http');

const PORT = process.env.PORT || 3000

// Create an HTTP server using the createServer method, which takes a callback function as an argument
// The callback function will be invoked every time a request is made to the server
const server = http.createServer((req, res) => {
    // Set the HTTP response status code to 200 (OK) and the Content-Type header to 'text/html'
    res.writeHead(200, {'Content-type': 'text/html'});

    // Send the HTML content to the client as the response body
    res.end('<h1>Hello Node!!!\n</h1>');
})
// Make the server listen for incoming HTTP requests on port 3000
server.listen(PORT,() =>{
    // Log that the server is running
    console.log(`Server is running at ${PORT}`)
});




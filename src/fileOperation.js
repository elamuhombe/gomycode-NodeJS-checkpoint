const http = require('http'); // Import the HTTP module
const fs = require('fs'); // Import the File System module

const PORT = process.env.PORT || 3000; // Set the port to listen on (default: 3000)

// Create a HTTP server
const server = http.createServer((req, res) => {
    // Append "Hello Node" to the file "welcome.txt"
    fs.appendFile('welcome.txt', 'Hello Node\n', function(err) {
        if (err) { // If an error occurs
            // Send a 500 Internal Server Error response
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            console.error(err); // Log the error to the console
        } else { // If no error occurs
            // Send a 200 OK response
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('File saved successfully\n'); // Send a success message to the client
            console.log('Saved successfully'); // Log success to the console
        }
    });
});


// Start the server and listen for incoming connections
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log that the server is running
});

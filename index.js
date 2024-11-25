// const http = require('http');

// const hostname = '0.0.0.0';
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('This is my first website :) \n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '0.0.0.0';
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     // Resolve the file path to the index.html file
//     const filePath = path.join(__dirname, 'index.html');
    
//     // Read the index.html file
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             // Handle errors by returning a 500 Internal Server Error
//             res.statusCode = 500;
//             res.setHeader('Content-Type', 'text/plain');
//             res.end('Internal Server Error\n');
//         } else {
//             // Serve the index.html file with a 200 status code
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end(content);
//         }
//     });
// });

// // Start the server and listen on the specified port and hostname
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


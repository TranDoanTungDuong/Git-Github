// Server Node.js với API đầy đủ cho demo
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load database
let database = {};
try {
    const dbData = fs.readFileSync('database.json', 'utf8');
    database = JSON.parse(dbData);
} catch (err) {
    console.log('Không thể load database:', err.message);
    database = { users: [], projects: [] };
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (pathname === '/' || pathname === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (pathname === '/style.css') {
        fs.readFile('style.css', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    } else if (pathname === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(database.users));
    } else if (pathname === '/api/projects') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(database.projects));
    } else if (pathname === '/api/info') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Backend API đang hoạt động',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            endpoints: ['/api/users', '/api/projects', '/api/info']
        }));
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy trên port ${PORT}`);
    console.log(`Truy cập: http://localhost:${PORT}`);
});
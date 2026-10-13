const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);

  const { pathname, query } = parsedUrl;

	if (pathname == "/health") {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ status: "OK" }, null, 2));
		return;
	}
	if (pathname == "/health-err") {
		res.writeHead(500, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ status: "FAILED" }, null, 2));
		return;
	}

	res.writeHead(404, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({ status: "FAILED" }, null, 2));
	return;
});

server.listen(8080);


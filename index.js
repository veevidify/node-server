const http = require('http');

const server = http.createServer((req, res) => {
  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}/`);

  const { pathname, query } = url;

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


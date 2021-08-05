import { createServer } from 'http';

const server = createServer((request, response) => {
  switch (request.url) {
    case '/status': {
      response.writeHead(200);
      response.write('Ok');
      response.end();
      return;
    }
    default: {
        response.writeHead(404, 'Server not found');
				response.write('Not ok');
				response.end();
				return;
    }
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('server está ouvindo na porta http://localhost:8000')
});

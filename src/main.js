import { createServer } from 'http';
import { stringify } from 'querystring';

const server = createServer((request, response) => {
  switch (request.url) {
    case '/status': {
      response.writeHead(200, {
        'Content-Type': 'application/json',
      });
      response.write(
        JSON.stringify({
          status: 'Ok',
        })
      );
      response.end();
      break;
    }
    default: {
      response.writeHead(404, 'Server not found');
			response.write('Not ok');
			response.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

server.listen(PORT, HOSTNAME, () => {
  console.log(`server está ouvindo na porta http://${HOSTNAME}:${PORT}`)
});

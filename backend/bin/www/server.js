require('dotenv').config();
const http = require('http');
const consola = require('consola');

const App = require('../../app/app.js');

class Server {
	constructor() {
		this.app = new App();
	}

	async start() {
		try {
			await this.app.configure();
			this.server = http.createServer(this.app.getApp());
			this.server.listen(process.env.PORT, () => {
				consola.success({
					message: `Server started successfully on port ${process.env.PORT}`,
					badge: true,
				});
			});
		} catch (error) {
			consola.error(error);
		}
	}
}

const server = new Server();

server.start();

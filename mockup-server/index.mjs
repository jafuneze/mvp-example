import Hapi from '@hapi/hapi';
import Pino from "hapi-pino";

const getItems = [
    { id: 1, name: "name 1", active: true },
    { id: 2, name: "name 2", active: false },
    { id: 3, name: "name 3", active: true }
];

async function start() {
    // Create a server with a host and port
    const server = Hapi.server({
        host: 'localhost',
        port: 3000,
        debug: false // disable Hapi debug console logging
    });

    // HapiJS global path prefix
    server.realm.modifiers.route.prefix = '/v0';

    // Add the route
    server.route({
        method: 'GET',
        path: '/items',
        handler: async function(request, h) {
            //request.logger.info('GET_itmes', getItems);
            return h.response(getItems);
        }
    });

    await server.register({
        plugin: Pino,
        options: {
            transport: {
                target: 'pino-pretty',
                options: {
                    colorized: true
                }
            }
        }
    });

    await server.start();
    server.log(['info'], `Items end point running at: ${server.info.uri}/items`);

    return server;


}

start();
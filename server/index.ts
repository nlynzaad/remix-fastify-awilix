/*
import * as fs from "node:fs";
import * as path from "node:path";
 */

import process from "node:process";
import {installGlobals} from "@remix-run/node";
import {fastify} from "fastify";
import {remixFastify} from "@mcansh/remix-fastify";
import {fastifyAwilixPlugin} from "@fastify/awilix";
import {container} from "./di";

installGlobals();

const app = fastify({logger: true});

/*
To run app with http 2. create a key and cert and place it in the ssl folder.
This can be helpful if you need it during development for example when developing file uploads that uses Request Body streams: https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests#doesnt_work_on_http1x
In production your app will probably be hosted behind a proxy or hosted elsewhere, where https/http2 is provided external to the application.
*/

/*
const app = fastify({
	logger: true,
	http2: true,
	https: {
		key: fs.readFileSync(path.join(process.cwd(), 'ssl', 'server.key')),
		cert: fs.readFileSync(path.join(process.cwd(), 'ssl', 'server.crt')),
	}
});
*/

await app.register(fastifyAwilixPlugin, {
	disposeOnClose: true,
	disposeOnResponse: true,
	strictBooleanEnforced: true,
	container
})

await app.register(remixFastify, {
	getLoadContext(request) {
		return {di: request.diScope.cradle};
	}
});

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST === "true" ? "0.0.0.0" : "127.0.0.1";

let address = await app.listen({port, host});
console.log(`✅ app ready: ${address}`);

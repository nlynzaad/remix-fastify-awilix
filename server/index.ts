import process from "node:process";
import { remixFastify } from "@mcansh/remix-fastify";
import { installGlobals } from "@remix-run/node";
import { fastify } from "fastify";
import {fastifyAwilixPlugin} from "@fastify/awilix";
import {container} from "./di";

installGlobals();

const app = fastify({ logger: true });

await app.register(fastifyAwilixPlugin, {
	disposeOnClose: true,
	disposeOnResponse: true,
	strictBooleanEnforced: true,
	container
})

await app.register(remixFastify, {
	getLoadContext(request) {
		return { di: request.diScope.cradle};
	}
});

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST === "true" ? "0.0.0.0" : "127.0.0.1";

let address = await app.listen({ port, host });
console.log(`✅ app ready: ${address}`);

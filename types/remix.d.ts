import "@remix-run/node"
import type {Cradle} from "@fastify/awilix";

declare module "@remix-run/node" {
	export interface AppLoadContext {
		di: Cradle
	}
}

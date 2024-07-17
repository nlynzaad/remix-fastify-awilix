import {diContainer} from "@fastify/awilix";
import {asClass, Lifetime} from "awilix";
import {RandomNumber} from "./randomNumber";

declare module '@fastify/awilix' {
	interface Cradle {
		singletonRandomNumber: RandomNumber,
		scopedRandomNumber: RandomNumber,
		transientRandomNumber: RandomNumber,
	}
}

export const container = diContainer.register({
	singletonRandomNumber: asClass(RandomNumber, {
		lifetime: Lifetime.SINGLETON
	}),
	scopedRandomNumber: asClass(RandomNumber, {
		lifetime: Lifetime.SCOPED
	}),
	transientRandomNumber: asClass(RandomNumber, {
		lifetime: Lifetime.TRANSIENT
	}),
})

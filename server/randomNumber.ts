export class RandomNumber {
	readonly #number: number;

	constructor() {
		this.#number = Math.random();
	}

	get number() {
		return this.#number;
	}
}

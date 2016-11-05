export class User {
	constructor(
		public _id: number,
		public email: String,
		public hashedPassword: String,
		public username: String,
		public gender: String,
		public age: Number,
		public height: Number,
		public weight: Number,
		public cnorm: Number
	) {}
}
export class ProductModel {
	constructor(
		public _id: number,
		public name: string,
		public category: string,
		public calories: number,
		public isCounatble: boolean,
		public weightOne: number,
        public protein: number,
        public fats: number,
        public carbohydrate: number
	) {}
}

/*

"name": "",
"calories": "",
"isCounatble": "",
"weightOne": "",
"protein": "",
"fats": "",
"carbohydrate": ""

*/
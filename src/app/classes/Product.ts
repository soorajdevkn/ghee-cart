export class Product {
    constructor(
        public brandName:string = null,
        public productName:string = null,
        public quantity:string = null,
        public price:number = null,
        public mrp:number = null,
        public imageURL:string = null,
        public offerText:number = null,
        public selectedCount:number = 0,
    ) {}
}
export class Product{
    productId : string;
    productName : string;
    productPrice : number;
    productDescription : string;
    qty : number;

    constructor(productId:string,productName:string,productPrice:number,productDescription:string,qty:number){
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.qty = qty;
    }

}
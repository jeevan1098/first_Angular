export class Product{
    productId : string;
    productBrand : string;
    productName : string;
    productPrice : number;
    productDescription : string;
    qty : number;

    constructor(productId:string,productBrand:string,productName:string,productPrice:number,productDescription:string,qty:number){
        this.productId = productId;
        this.productBrand = productBrand;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.qty = qty;
    }

}
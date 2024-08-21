import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productData: Product[]=[];
  constructor() { 
    this.productData[0] = new Product("1", "Apple", "iPhone 14", 999, "Latest model with 128GB storage", 50);
this.productData[1] = new Product("2", "Samsung", "Galaxy S23", 899, "Flagship model with 256GB storage", 40);
this.productData[2] = new Product("3", "Sony", "WH-1000XM5", 299, "Noise-cancelling over-ear headphones", 100);
this.productData[3] = new Product("4", "Dell", "XPS 13", 1199, "13-inch laptop with Intel i7 processor", 30);
this.productData[4] = new Product("5", "Apple", "Watch Series 8", 399, "Smartwatch with health tracking features", 60);
this.productData[5] = new Product("6", "Google", "Pixel 7", 799, "Google's flagship smartphone", 45);
this.productData[6] = new Product("7", "Sony", "PlayStation 5", 499, "Next-gen gaming console", 20);
this.productData[7] = new Product("8", "Nintendo", "Switch", 299, "Portable gaming console", 70);
this.productData[8] = new Product("9", "Bose", "QuietComfort 45", 329, "Wireless noise-cancelling headphones", 80);
this.productData[9] = new Product("10", "HP", "Envy x360", 899, "Convertible laptop with AMD Ryzen processor", 35);

   
  }
  sortedData : Product[]=this.productData;
  getProductData(): Product[] {
    return [...this.productData];
  }
  findBrand(productBrand: string): Product[] {
    const lowerCaseBrand = productBrand.toLowerCase();
    return this.productData.filter(product => product.productBrand.toLowerCase() === lowerCaseBrand);
  }
  priceRanges(minPrice: number, maxPrice: number): Product[] {
    return this.productData.filter(product => product.productPrice >= minPrice && product.productPrice <= maxPrice);

    }
  arrayMintoMaxSortArray(): Product[] {
    return [...this.sortedData].sort((a, b) => a.productPrice - b.productPrice);
  }
  addProduct(product: Product): void {
    this.productData.push(product);
  }
  
}

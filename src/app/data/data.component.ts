import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  productDat: Product[] = [];
  sortDat: Product[] = [];
  
  minPrice: number = 0;
  maxPrice: number = 0;
  
  // Create a new product instance for form binding
  product: Product = new Product('', '', '', 0, '', 0);

  constructor(private service: DataService,private productService:ProductService) {
    this.productDat = this.service.getProductData();
    this.sortDat = [...this.productDat]; 


  }

  brandSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.trim().toLowerCase();
    
    if (searchTerm) {
      this.productDat = this.service.findBrand(searchTerm);
    } else {
      this.productDat = this.service.getProductData();
    }
    this.sortDat = [...this.productDat]; 
  }

  priceRangeSearch(): void {
    this.productDat = this.service.priceRanges(this.minPrice, this.maxPrice);
    this.sortDat = [...this.productDat];
  }

  sortData(order: 'asc' | 'desc' | 'none'): void {
    if (order === 'asc') {
      this.sortDat = [...this.productDat].sort((a, b) => a.productPrice - b.productPrice);
    } else if (order === 'desc') {
      this.sortDat = [...this.productDat].sort((a, b) => b.productPrice - a.productPrice);
    } else if (order === 'none') {
      this.sortDat = [...this.productDat];
    }
  }

  onSubmit(): void {
    console.log(this.product);
    
    this.productDat.push({...this.product});
    this.sortDat = [...this.productDat];
  
    this.productService.saveProduct(this.product).subscribe();
    this.product = new Product('', '', '', 0, '', 0);
    

  }
}

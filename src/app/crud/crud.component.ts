import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  product: Product = new Product('', '', '', 0, '', 0); // For form binding

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onDelete(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  editProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  onUpdate(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct).subscribe(() => {
        this.loadProducts();
        this.selectedProduct = null; 
      });
    }
  }

  cancelEdit(): void {
    this.selectedProduct = null; 
  }

  onSubmit(): void {
    if (this.product) {
      this.productService.saveProduct(this.product).subscribe(() => {
        this.loadProducts();
        this.product = new Product('', '', '', 0, '', 0);
      });
    }
  }
}

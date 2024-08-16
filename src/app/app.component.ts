
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kendrick';
  company = 'UST';
  location = 'Welcome to TVM !';
  productid = "HP105NX";
  description = "i7 16gb 512gb";
 
  quantity = 200;
  availability = this.quantity > 0;
  instock = this.availability;
  orderDate: Date = new Date;
 
  orderQuantity = 0;
  isorderQuantityAvailable = (this.orderQuantity < this.quantity)
  //isorderQuantityAvailable = false;
  deliverColor = 'red';
 
  products = [
    {"productId":"1234", "description":"Mobile", "price":"75000"},
    {"productId":"5678", "description":"Notebook", "price":"85000"},
    {"productId":"9091", "description":"Laptop", "price":"65000"},
    {"productId":"9092", "description":"Television", "price":"50000"}
  ]
 
  printOrder(x: any): void{
    console.log(x, ' : quantity of order placed');
  }
 
}
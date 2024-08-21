
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  title = 'Kendrick';
  company = 'UST';
  location = 'Welcome to TVM !';
  productid = "HP105NX";
  description = "i7 16gb 512gb";
   xdata:String = "hello";
  
 
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
  x="hi"
 changes():void{
    this.x="helloJeevanBabus";

  }
  ngOnInit(): void {
    console.log(" Parent Init");
  }
  ngOnChanges(): void {
    console.log("Parent OnChanges");
  }
  ngDoCheck(): void {
    console.log("Parent DoCheck");
  }
  ngAfterContentInit(): void {
    console.log("Parent contentinit ");
  }
  ngAfterContentChecked(): void {
    console.log("Parent contentchecked ");
  }
  ngAfterViewInit(): void {
    console.log("Parent viewinit ");
  }
  ngAfterViewChecked(): void {
    console.log("Parent viewchecked ");
    console.log("--------")
  }
  constructor(){
    console.log("Parent constructor ");
  }

  
}
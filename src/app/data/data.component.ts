import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  productDat: Product[]=[];
  constructor(private service:DataService ){
    this.productDat=service.getProductData();
    console.log(this.productDat);

  }
  ok:string="1px solid black"

}

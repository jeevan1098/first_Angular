import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  onColorChange(){
    
    document.body.style.backgroundColor = "blue";
  }
  onColorChanges(){
    document.body.style.backgroundColor = "green";
  }
  fontChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const fontSize = input.value; 
    const h1 = document.getElementById("h1");
    if (h1) {
      h1.style.fontSize = `${fontSize}px`;
    }
  }
  currentHeading: number = 1;

  showHeading(headingNumber: number): void {
    this.currentHeading = headingNumber;
  }
 clickChanges(event:Event){
  const c=event.target as HTMLInputElement;
  if(c.checked){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
 }else{
  document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

 }

 }
 products = [
  { productId: 'P001', description: 'iPhone 12', price: 999 },
  { productId: 'P002', description: 'Galaxy S21', price: 799 },
  { productId: 'P003', description: 'Pixel 6', price: 699 }
];
col:string="red"
}


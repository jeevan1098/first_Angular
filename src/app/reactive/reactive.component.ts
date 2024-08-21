import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  //lifecycle
  @Input() x:String ="";
  ngOnInit(): void {
    console.log(" Child Init");
  }
  ngOnChanges(): void {
    console.log("Child OnChanges");
  }
  ngDoCheck(): void {
    console.log("Child DoCheck");
  }
  ngAfterContentInit(): void {
    console.log("Child contentinit ");
  }
  ngAfterContentChecked(): void {
    console.log("Child contentchecked ");
  }
  ngAfterViewInit(): void {
    console.log("Child viewinit ");
  }
  ngAfterViewChecked(): void {
    console.log("Child viewchecked ");
    console.log("--------")
  }
  constructor(){
    console.log("Child constructor ");
  }

  

  

}

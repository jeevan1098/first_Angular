import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form group
    this.productForm = this.formBuilder.group({
      productId: ['', [Validators.required, Validators.minLength(8)]],
      brand: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: this.formBuilder.group({
        age: [0],
        seasons: ['']
      }),
      quantity: [0, [Validators.required, Validators.min(0)]],
      suppliers: this.formBuilder.array([this.formBuilder.control('')], Validators.required)
    });
  }

  get suppliers(): FormArray {
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier(): void {
    this.suppliers.push(this.formBuilder.control(''));
  }

 
  onSubmit(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { FormsComponent } from './forms/forms.component';
import { CreateComponent } from './create/create.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestobservableComponent } from './testobservable/testobservable.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { TokenComponent } from './token/token.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DataComponent,
    FormsComponent,
    CreateComponent,
    ReactiveComponent,
    FormbuilderComponent,
    TestobservableComponent,
    CrudComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
 
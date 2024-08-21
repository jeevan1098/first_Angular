import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  showLogin = true;
  showSignup = false;
  showLoginPage = false;
  showSignupPage = false;
  showheader=true;

  showLoginForm() {
    this.showLogin = true;
    this.showSignup = false;
    this.showLoginPage = false;
    this.showSignupPage = false;
    this.showheader=true;
  }

  showSignupForm() {
    this.showLogin = false;
    this.showSignup = true;
    this.showLoginPage = false;
    this.showSignupPage = false;
    this.showheader=true;
  }

  loginSuccess() {
    this.loginusername=this.loginusername;
    this.loginpassword=this.loginpassword;
    console.log(this.loginusername,this.loginpassword);
    this.showLogin = false;
    this.showSignup = false;
    this.showLoginPage = true;
    this.showheader=false;
  }

  signupSuccess() {
    this.showLogin = false;
    this.showSignup = false;
    this.showSignupPage = true;
    this.showheader=false;
  }

  goBackToForms() {
    this.showLogin = true;
    this.showSignup = false;
    this.showLoginPage = false;
    this.showSignupPage = false;
    this.showheader=true;
  }
   loginusername:string="";
   loginpassword:string="";
   signupUsername: string = '';
  fullName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  password: string = '';
  confirmPassword: string = '';
}

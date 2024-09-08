import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



export class AppModule {
signUp(arg0: any) {
throw new Error('Method not implemented.');
}
login: any;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})




export class LoginComponent  {
  loginData: any;
  login(arg0: any) {
throw new Error('Method not implemented.');
}
  formType = 'signup';
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  toggleFormType() {
    this.formType = this.formType === 'signup' ? 'login' : 'signup';
  }

  submitForm() {
    if (this.formType === 'signup') {
      console.log('Sign up form submitted:', this.form.value);
    } else {
      console.log('Login form submitted:', this.form.value);
    }
  }
}


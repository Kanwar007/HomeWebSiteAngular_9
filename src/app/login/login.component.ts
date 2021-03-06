import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
   

  loginForm = new FormGroup(
            {
              username: new FormControl('',Validators.required),
              password: new FormControl('',Validators.required),
              'rememberme': new FormControl('')
            }
  );
 

get username(){
  return this.loginForm.get('username')
}
get password(){
  return this.loginForm.get('password')
}
  

  onSubmit(){
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    console.log(this.loginForm.value.rememberme);
  }
}

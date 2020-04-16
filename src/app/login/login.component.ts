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
              username:new FormControl(),
              password: new FormControl(),
              'remember-me': new FormControl()
            }
  );
 


  

  onSubmit(){
    console.log(this.loginForm.value);
  }
}

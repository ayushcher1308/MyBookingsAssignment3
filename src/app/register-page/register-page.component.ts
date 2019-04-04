import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { MustMatch } from '../shared/password-validator';
import { RegisterformService } from '../services/registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

RegisterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerUserService:RegisterformService, private router:Router) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      emailid: ['',[Validators.required, Validators.email]],
      address:['',Validators.required],
      phoneno:['',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
      password:['',[Validators.required, Validators.minLength(6)]],
      medical:[''],
      cpassword:['',[Validators.required]]
    },
    {validator: MustMatch("password","cpassword")}
    );
  }

  registerUser = function (user) {
   // console.log(user);
    //this.http.post('http://localhost:3000/profile', user);
    this.registerUserService.registerNewUser(user)
    .subscribe(
      (response) => {console.log(response);
      this.router.navigate(['signin']);},
      (error) => console.log(error)
    );
    
  }

}

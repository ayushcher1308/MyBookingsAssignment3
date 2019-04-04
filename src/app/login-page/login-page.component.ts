import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { GetDataService} from '../services/get-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  LoginForm: FormGroup;
  credentials = {
    emailid:'ayush@ayush',
    password:'qwerty'
  };

  constructor(private formBuilder: FormBuilder,
    private getData: GetDataService,
    private router:Router) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
        emailid: ['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]]
    });

    // convenience getter for easy access to form fields
   // get f() { return this.LoginForm.controls; }

  }

  matchCredentials = function()
{
  this.credentials.emailid = this.LoginForm.get('emailid').value;
  this.credentials.password = this.LoginForm.get('password').value;
  this.getData.checkCredentials(this.credentials).subscribe(result =>{
    if((Object.keys(result).length)==0)
    {
      alert("Enter Correct Credentials");
    
    }
    else
      {
        console.log(result);
        localStorage.setItem("user_info",JSON.stringify(result));
        localStorage.setItem("loggedIN","true");
        this.router.navigate(['profile']);
      }
  })

}

}

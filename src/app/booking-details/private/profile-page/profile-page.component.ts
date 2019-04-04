import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { UpdateInfoService } from 'src/app/services/update-info.service';
import { GetDataService } from 'src/app/services/get-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  RegisterForm: FormGroup;
  //fullName = JSON.parse(localStorage.getItem("user_info"))[0].firstname + ' '+ JSON.parse(localStorage.getItem("user_info"))[0].lastname;

  User = {
    firstname:'',
    lastname:'',
    emailid:'',
    phoneno:'',
    medical:'',
    address:'',
    password:'',
    cpassword:'',
    id:''
  };

  upadated_cred={
    emailid:'',
    password:''
  }

  load:boolean;
  
myupdateddata = {};

  constructor(private formBuilder: FormBuilder , private updatinfo:UpdateInfoService,
    private getData: GetDataService,
    private router:Router) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      firstname:[JSON.parse(localStorage.getItem("user_info"))[0].firstname,Validators.required],
      lastname:[JSON.parse(localStorage.getItem("user_info"))[0].lastname,Validators.required],
      emailid: [JSON.parse(localStorage.getItem("user_info"))[0].emailid,[Validators.required, Validators.email]],
      address:[JSON.parse(localStorage.getItem("user_info"))[0].address,Validators.required],
      phoneno:[JSON.parse(localStorage.getItem("user_info"))[0].phoneno,[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
      medical:[JSON.parse(localStorage.getItem("user_info"))[0].medical],
    },
    );
    this.load = false;
  }

  updateProfile()
  {
    this.User.firstname = this.RegisterForm.get('firstname').value;
    this.User.lastname = this.RegisterForm.get('lastname').value;
    this.User.emailid = this.RegisterForm.get('emailid').value;
    this.User.address = this.RegisterForm.get('address').value;
    this.User.phoneno = this.RegisterForm.get('phoneno').value;
    this.User.medical = this.RegisterForm.get('medical').value;
    this.User.password = JSON.parse(localStorage.getItem("user_info"))[0].password;
    this.User.cpassword = JSON.parse(localStorage.getItem("user_info"))[0].cpassword;
    this.User.id = JSON.parse(localStorage.getItem("user_info"))[0].id;
    this.updatinfo.updateUserInfo(this.User,JSON.parse(localStorage.getItem("user_info"))[0].id);
    this.load = true;
    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.upadated_cred.emailid = this.RegisterForm.get('emailid').value;
      this.upadated_cred.password = JSON.parse(localStorage.getItem("user_info"))[0].password;
      this.getData.checkCredentials(this.upadated_cred).subscribe(result =>{
            console.log(result);
            localStorage.setItem("user_info",JSON.stringify(result));
            this.load = false;
           // alert("Profile Updated Successfully");
            location.reload();
            
           // console.log(localStorage.getItem('user_info'));
      })
 }, 2000);

   
   // localStorage.setItem("user_info",JSON.stringify(this.User));
    //alert("Profile Updated Successfully");
   // this.router.navigate(['profile']);
  };

 

}

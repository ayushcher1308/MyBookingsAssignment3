import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {
public header:string;
Upcoming;
Past;
tlength;
  User = JSON.parse(localStorage.getItem("user_info"))[0].firstname;
  imagePath = 'images/Book_It_logo.png';
  constructor(private route:Router,private getBookings:GetDataService) { route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )}

  ngOnInit() {

    this.getBookings.getUpcomingBookings().subscribe(result =>{
     // console.log(result[0].Upcoming.length);
     this.Upcoming = result[0].Upcoming.length;
     this.Past = result[1].Past.length;
     this.tlength = this.Upcoming + this.Past;
    // console.log(this.tlength);
   });
  }

  handleRouteChange = () => { 
    if (this.route.url.includes('profile')) { 
    this.header = "PROFILE"; 
    } 
    // if (this.route.url.includes('mybookings')) { 
    // this.header = "MY BOOKINGS"; 
    // } 
    if (this.route.url.includes('faq')) { 
    this.header = "FAQs"; 
    } 
    };

  Logout = function()
  {
    console.log("logout");
    localStorage.clear();
    this.route.navigate(['']);
  }

  bookings()
  {
    this.route.navigate(['mybookings']);
  }

  profile()
  {
    this.route.navigate(['profile']);
  }

  faq()
  {
    this.route.navigate(['faq']);
  }

}

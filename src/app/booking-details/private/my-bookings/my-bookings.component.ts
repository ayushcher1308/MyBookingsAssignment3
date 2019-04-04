import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  constructor(private getBookings:GetDataService) { }
  Upcoming = [];
  Past = [];
  upbooking:boolean;
  pastbooking:boolean;

  ngOnInit() {
    // hitting get request
    this.getBookings.getUpcomingBookings().subscribe(result =>{

      this.Upcoming = result[0].Upcoming;
      this.Past = result[1].Past;
    }
      )

    this.upbooking = true;
    this.pastbooking = false;  
  }
// toggle tabs
  UpBooking()
  {
    
    this.upbooking = true;
    this.pastbooking = false;   
  };

  PastBooking()
  {
    this.upbooking = false;
    this.pastbooking = true;
  };

  

}

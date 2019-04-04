import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  checkCredentials(param)
  {
    return this.http.get('http://localhost:3000/profile',{
      params:param
    });
  };

  getUpcomingBookings()
  {
    return this.http.get('http://localhost:3000/Bookings');
  };

  getfaq()
  {
    return this.http.get('http://localhost:3000/faqs');
  };


}

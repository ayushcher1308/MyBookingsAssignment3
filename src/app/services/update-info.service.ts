import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {

  constructor(private http:HttpClient) { }

// updating Our User 

  updateUserInfo(par , id)
  {
      this.http.put('http://localhost:3000/profile'+"/"+id,par).subscribe(data=>console.log(data));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterformService {

  constructor(private http:HttpClient) { }
  registerNewUser(users:any[]){
    return this.http.post('http://localhost:3000/profile', users);
  }
}

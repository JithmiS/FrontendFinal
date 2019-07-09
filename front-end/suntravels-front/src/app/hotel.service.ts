import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  
  url='http://localhost:8080';

  hotels:Hotel[];

  formData : Hotel
  
  constructor(private http: HttpClient) { }

  getHotelList(): Observable<any>{
    return this.http.get(this.url+'/hotels');
    console.log("I'm in");
  }

  postHotel(formData : Hotel){
    console.log(formData);
    return this.http.post(this.url+'/hotels', formData);
  }

}

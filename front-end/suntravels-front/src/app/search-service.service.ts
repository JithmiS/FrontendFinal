import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {}

  addSearch (data: FormGroup){
    return this.http.post('http://localhost:8080/reservation', data)
  } 

  getSearch():Observable<any>{
    return this.http.get('http://localhost:8080/reservation')
  }
}

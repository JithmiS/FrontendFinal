import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddContractService {

  constructor(private http:HttpClient) { }

  addContract (data: FormGroup){
    return this.http.post('http://localhost:8080/addcontracts', data)
  }

}

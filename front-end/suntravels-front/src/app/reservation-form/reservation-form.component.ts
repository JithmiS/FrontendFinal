import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SearchServiceService } from '../search-service.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  reservationForm : FormGroup
  constructor(private fb: FormBuilder, private searchservice: SearchServiceService) { }

  ngOnInit() {
    this.reservationForm = this.fb.group({
      check_in_date: [null, Validators.required],
      no_of_nights: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      search: this.fb.array([this.addSearchGroup()])
    })
  }

  addSearchGroup() {
    return this.fb.group({
      no_of_rooms: [null, Validators.required],
      max_adults: [null, Validators.required]
    });
  }

  get searchArray(){
    return <FormArray> this.reservationForm.get('search');
  }

  addSearch(){
    this.searchArray.push(this.addSearchGroup());
  }

  removeSearch(index){
    this.searchArray.removeAt(index);
  }

  get check_in_date(){
    return this.reservationForm.get('check_in_date');
  }

  get no_of_nights(){
    return this.reservationForm.get('no_of_nights');
  }

  
  submitSearch() {
    console.log(this.reservationForm.value);
    this.searchservice.addSearch(this.reservationForm.value).subscribe(data => console.log({data}));
  }

}

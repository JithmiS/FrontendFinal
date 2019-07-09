import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contractForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.contractForm = this._fb.group({
      start_date: [],
      end_date: [],
      markup: [],
      hotel_id: [],

      roomtypes: this._fb.array([])
    });
  }

  addRoomTypesGroup() {
    return this._fb.group({
      type_id: [],
      type_name: [],
      price: [],
      no_of_rooms: [],
      max_adults: [],
    })
  }

  addRoomType(){
    this. roomTypesArray.push(this.addRoomTypesGroup());
  }

  get roomTypesArray(){
    return <FormArray>this.contractForm.get('roomtypes');
  }

  submitHandler(){
    console.log(this.contractForm.value);
  }

}

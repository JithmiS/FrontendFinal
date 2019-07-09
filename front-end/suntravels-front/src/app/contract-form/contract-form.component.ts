import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AddContractService } from '../add-contract.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  contractForm: FormGroup
  constructor(private _fb: FormBuilder, private addContractservice: AddContractService) { }

  ngOnInit() {
    this.contractForm = this._fb.group({
      start_date: [null, Validators.required],
      end_date: [null, Validators.required],
      markup: [null, Validators.required],
      hotel_id: [null, Validators.required],
      roomtypes: this._fb.array([this.addRoomTypesGroup()])
    });
  }

  addRoomTypesGroup(){
    return this._fb.group({
      type_name: [null, Validators.required],
      price: [null, Validators.required],
      no_of_rooms: [null, Validators.required],
      max_adults: [null, Validators.required]
    });
  }

  get roomtypesArray(){
    return <FormArray> this.contractForm.get('roomtypes')
  }

  addRoomType(){
    this.roomtypesArray.push(this.addRoomTypesGroup());
  }

  removeRoomType(index){
    this.roomtypesArray.removeAt(index);
  }

  get start_date(){
    return this.contractForm.get('start_date');
  }

  get end_date(){
    return this.contractForm.get('end_date');
  }

  get markup(){
    return this.contractForm.get('markup');
  }

  get hotel_id(){
    return this.contractForm.get('hotel_id');
  }

  submitHandler() {
    console.log(this.contractForm.value);
    this.addContractservice.addContract(this.contractForm.value).subscribe(data => console.log({data}));
  }

}

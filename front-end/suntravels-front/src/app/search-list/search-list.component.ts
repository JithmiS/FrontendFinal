import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { Result } from "./../result";
import { observable, Observable } from 'rxjs';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  results : Observable<Result>
  no_of_nights : any
  private reservationComponent :ReservationFormComponent

  constructor(private searchService: SearchServiceService) { }
  
  ngOnInit(){
    this.searchService.getSearch().subscribe(data =>{
      this.results = data;
      console.log(data);
    });
    this.no_of_nights = this.reservationComponent.no_of_nights;
  }

}

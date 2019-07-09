import { Observable } from "rxjs";
import { HotelService} from "./../hotel.service";
import { Hotel } from "./../hotel";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: Object;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotelList().subscribe(data=>{
      this.hotels = data;
      console.log(data);
    });
    console.log('worked');
  }

}

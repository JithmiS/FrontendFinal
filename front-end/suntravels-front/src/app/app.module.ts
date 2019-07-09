import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelService } from './hotel.service';
import { ContractComponent } from './contract/contract.component';
import { ContractFromComponent } from './contract-from/contract-from.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ReservationComponent,
    ContactComponent,
    HotelListComponent,
    CreateHotelComponent,
    ContractComponent,
    ContractFromComponent,
    ContractFormComponent,
    ReservationFormComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

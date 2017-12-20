import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DeviceListComponent } from './devicelist/devicelist.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { ContactMeComponent } from './contactme/contactme.component';
import { HttpClientModule } from '@angular/common/http';
import { FleetSuService } from './services/fleetsu.service';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [FleetSuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

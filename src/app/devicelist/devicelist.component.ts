import { Component, OnInit } from '@angular/core';
import {FleetSuService} from '../services/fleetsu.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl: './devicelist.component.html',
    styleUrls: ['./devicelist.component.css']
})
export class DeviceListComponent implements OnInit {
  public momDate: any;
  public deviceList: any;
  constructor( private fleetSuService: FleetSuService) {}
  public ngOnInit() {
      this.fleetSuService.getDeviceList().subscribe(
        (listResponse) => {
          this.deviceList = listResponse;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
}

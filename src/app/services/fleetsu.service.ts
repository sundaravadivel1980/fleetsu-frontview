import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Device } from '../models/device';

@Injectable()
export class FleetSuService {
    private serviceAPIUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}
    public getDeviceList(): Observable<Device> {
        return this.http.get<Device>(this.serviceAPIUrl + 'listDevice');
    }
}

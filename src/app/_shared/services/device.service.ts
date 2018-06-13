import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {
    constructor(private http: HttpClient) {

    }

    getDevices() {
        return of(DEVICES);
    }

}

const DEVICES = [
    {id: 1 , name: 'asdasd'}
];

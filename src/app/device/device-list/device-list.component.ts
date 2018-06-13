import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../_shared/services';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: any[];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevices().subscribe(res => {
      this.devices = res;
    });
  }

}

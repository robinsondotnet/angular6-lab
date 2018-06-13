import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  @Input() device: any;

  constructor() { }

  ngOnInit() {
  }

}

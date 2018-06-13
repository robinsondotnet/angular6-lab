import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  DeviceListComponent,
  DeviceDetailComponent
} from './device';

import {
  NavMenuComponent,
  TopBarComponent
} from './_layout';

import { DeviceService } from './_shared/services';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(([
      { path: '', redirectTo: 'device', pathMatch: 'full' },
      { path: 'device', component: DeviceListComponent },
      { path: 'service', component: DeviceListComponent },
      { path: 'car', component: DeviceListComponent },
      { path: 'owner', component: DeviceListComponent },
      { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    ])),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

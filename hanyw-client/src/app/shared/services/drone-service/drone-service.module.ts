import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneService } from './drone.service';
import { WebsocketServiceModule } from '@app/shared/services/websocket-service/websocket-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebsocketServiceModule,
  ],
  providers: [
    DroneService,
  ]
})
export class DroneServiceModule { }

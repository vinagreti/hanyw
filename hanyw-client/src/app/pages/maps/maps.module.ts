import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { QuadrantModule } from '@app/shared/components/quadrant/quadrant.module';
import { DroneServiceModule } from '@app/shared/services/drone-service/drone-service.module';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    QuadrantModule,
    DroneServiceModule,
    FlexLayoutModule,
  ]
})
export class MapsModule { }

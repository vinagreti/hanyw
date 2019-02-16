import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadrantComponent } from './quadrant.component';
import { DroneModule } from '@app/shared/components/drone/drone.module';

@NgModule({
  declarations: [QuadrantComponent],
  imports: [
    CommonModule,
    DroneModule,
  ],
  exports: [QuadrantComponent]
})
export class QuadrantModule { }

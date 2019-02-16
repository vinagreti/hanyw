import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneComponent } from './drone.component';

@NgModule({
  declarations: [DroneComponent],
  imports: [
    CommonModule
  ],
  exports: [DroneComponent]
})
export class DroneModule { }

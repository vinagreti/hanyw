import { Component, Input } from '@angular/core';
import { DroneComponent } from '@app/shared/components/drone/drone.component';
import { Quadrant } from '@commons/models/quadrant.model';

@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss']
})
export class QuadrantComponent implements Quadrant {

  @Input() id: number;

  @Input() drones: DroneComponent[];

}

import { Component, OnInit } from '@angular/core';
import { Quadrant } from '@commons/models/quadrant.model';
import { DroneService } from '@app/shared/services/drone-service/drone.service';
import { Observable } from 'rxjs';
import { Drone } from '@commons/models/Drone.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  quadrants$: Observable<Quadrant[]>;

  constructor(
    private droneService: DroneService,
  ) { }

  ngOnInit() {
    this.connectToDronesStream();
  }

  private connectToDronesStream() {
    this.quadrants$ = this.droneService.drones()
      .pipe(
        map((drones: Drone[]) => {

          const quadrants: Quadrant[] = [];

          drones.forEach(drone => {
            quadrants[drone.quadrant] = quadrants[drone.quadrant] || new Quadrant({ id: drone.quadrant });
            quadrants[drone.quadrant].drones.push(drone);
          });

          const quadrantsLength = quadrants.length > 0 ? (quadrants[quadrants.length - 1]).id : 0;

          const quadrantsMap = [];

          for (let id = 0; id < quadrantsLength; id++) {

            quadrantsMap[id] = new Quadrant(quadrants[id] || { id });

          }

          return quadrantsMap.filter(quadrant => quadrant);
        })
      );
  }

}

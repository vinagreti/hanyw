import { Drone } from './../../../../../hanyw-commons/models/drone.model';
import { randomDroneMovement } from './../../../../../hanyw-commons/helpers/random/random-drone-movement';

export class DroneG extends Drone {

  constructor(data: any = {}) {

    super(data);

    this.move();

  }

  private move() {

    setInterval(() => {

      randomDroneMovement(this);

    }, 500);

  }

}

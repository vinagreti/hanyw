import { Drone } from './drone.model';

export class Quadrant {
  id: number;
  drones: Drone[];

  constructor(data: any = {}) {
    this.id = data.id;
    this.drones = data.drones || [];
  }
}
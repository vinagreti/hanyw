import { Component, Input, HostBinding } from '@angular/core';
import { Drone } from '@commons/models/drone.model';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})
export class DroneComponent implements Drone {

  @Input() id: number;

  @Input() quadrant: number;

  @Input()
  get positionX() { return this._positionX; }
  set positionX(v: number) {
    this._positionX = v;
    this.left = `${v / 10}%`;
  }

  @Input()
  get positionY() { return this._positionY; }
  set positionY(v: number) {
    this._positionY = v;
    this.top = `${v / 10}%`;
  }

  @HostBinding('style.left') left: string;

  @HostBinding('style.top') top: string;

  private _positionX: number;

  private _positionY: number;

  constructor() { }

}

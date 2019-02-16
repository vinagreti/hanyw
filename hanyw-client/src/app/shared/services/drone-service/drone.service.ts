import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { WebsocketService } from '@app/shared/services/websocket-service/websocket.service';
import { Drone } from '@commons/models/drone.model';

@Injectable()
export class DroneService {

  private dronesWsConnection: Observable<Drone[]>;

  constructor(private wsServer: WebsocketService) {

    console.log('DroneService:: STARTED');

    this.connectToDronesWs();

  }

  drones(): Observable<Drone[]> {

    return this.dronesWsConnection;

  }

  private connectToDronesWs() {

    this.dronesWsConnection = this.wsServer
      .connect<Drone[]>('ws://localhost:2019/position')
      .pipe(
        debounceTime(80), // avoids overprocessing
    );

  }

}

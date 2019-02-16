import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

const reconnectionTimeout = 30e3;

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() {
    console.log('WebsocketService:: STARTED');
  }

  connect<T>(
    url = '',
    stream = new Subject<T>()
  ): Observable<T> {

    const newWsConnection = new WebSocket(url);

    newWsConnection.onopen = (w) => {

      newWsConnection.onmessage = (message) => {
        try {
          stream.next(JSON.parse(message.data));
        } catch (error) {
          stream.next(message.data);
        }
      };

      newWsConnection.onerror = (message) => {
        setTimeout(() => {
          this.connect(url, stream);
        }, reconnectionTimeout);
        console.log(`WebsocketService:: Connection ERROR (url) ${url} message: `, message);
      };

      newWsConnection.onclose = (message) => {
        setTimeout(() => {
          this.connect(url, stream);
        }, reconnectionTimeout);
        console.log(`WebsocketService:: Connection CLOSED (url) ${url} message: `, message);
      };

    };

    return stream.pipe(
      distinctUntilChanged(),
      debounceTime(10), // avoids overprocessing
    );

  }
}

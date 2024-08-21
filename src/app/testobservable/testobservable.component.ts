import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testobservable',
  templateUrl: './testobservable.component.html',
  styleUrls: ['./testobservable.component.css']
})
export class TestobservableComponent {

  
  invoke() {
    let observable: Observable<Object> = this.createObservable();
    this.subscribeToObservable(observable);
  }

  
  createObservable(): Observable<Object> {
    return new Observable((obs) => {

      setTimeout(() => {
        obs.next('Hello');
      }, 1000);

      setTimeout(() => {
        obs.next('Hello');
      }, 2000);

      setTimeout(() => {
        obs.next('Hello');
      }, 3000);

      setTimeout(() => {
        obs.next('Hello');
        obs.complete(); 
      }, 4000);

    });
  }

  
  subscribeToObservable(observable: Observable<Object>) {
    observable.subscribe({
      next(value) {
        console.log('Received:', value);
      },
      error(err) {
        console.error('Error:', err);
      },
      complete() {
        console.log('Observable complete');
      }
    });
  }
}

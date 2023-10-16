import { NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { subscribeToIterable } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-router-sample';
  get test() {
    console.log('test AppComponent');
    return 1;
  }
  ngOnInit() {
    console.log('app');
  }
  clickA() {}
  constructor() {
    const test$ = new Observable((subscriber) => {
      console.log('subscriber start');
      subscriber.next('1');
      subscriber.next('11');
      subscriber.error('error occured');

      subscriber.complete();
      subscriber.next('111');
    });

    test$.subscribe(
      (x) => {
        console.log('subscribe nxt value', x);
      },
      (error) => {
        console.log('Error', error);
      },
      (complete) => {
        console.log('complete');
      }
    );
  }
}

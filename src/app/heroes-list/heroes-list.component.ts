import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  get test() {
    console.log('test HeroesListComponent')
    return 1;
  } 
  ngOnInit() {
    console.log('HeroesListComponent')
  }
  clickA() {}
}
 

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
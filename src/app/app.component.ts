import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angPract';
  navaigateFeature = 'recipe';
  selectedNav(val: string) {
    this.navaigateFeature = val;
    console.log(this.navaigateFeature);
  }
}

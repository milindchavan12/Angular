import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class='nav-links' [routerLink]="['/home']">Home</a></li>
      <li><a class='nav-links' [routerLink]="['/products']">Products</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle : string = 'Angular Product Management';
}

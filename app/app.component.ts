import { Component }       from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MdAnchor } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';

import { DashboardComponent } from './dashboard.component';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-details.component';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [MdAnchor, MdToolbar, ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}

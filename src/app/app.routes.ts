
import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import {DragonballComponent} from './pages/dragonball/dragonball-paage.component'


export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: '**',
    redirectTo: 'counter'
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  }
];

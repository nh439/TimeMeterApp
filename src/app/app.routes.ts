import { Routes } from '@angular/router';
  import { TimeComponent } from './time/time.component';
  import  {Meter} from './meter/meter/meter';

export  const routes: Routes = [
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: '',
    component: Meter
  }
];

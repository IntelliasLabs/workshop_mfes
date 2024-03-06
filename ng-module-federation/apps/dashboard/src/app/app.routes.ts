import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'analytics',
    loadChildren: () => loadRemoteModule('analytics', './Routes').then(
      (m) => m.remoteRoutes
   ),
  },
  {
    path: 'live-tracking',
    loadChildren: () => loadRemoteModule('live-tracking', './Routes').then(
      (m) => m.remoteRoutes
   ),
  },
];

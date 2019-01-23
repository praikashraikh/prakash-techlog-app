import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { PostListComponent } from './components/post-list/post-list.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostListComponent
      },
      {
        path: '',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      }
    ]
  }
];

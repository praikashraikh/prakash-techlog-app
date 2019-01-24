import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginComponent } from './components/login/login.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostListComponent
      }
    ]
  }
];

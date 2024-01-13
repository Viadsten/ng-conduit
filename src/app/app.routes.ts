import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { AuthComponent } from './features/components/auth/auth.component';
import { ProfileComponent } from './features/components/profile/profile.component';
import { FeedListComponent } from './features/components/feed-list/feed-list.component';


export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: FeedListComponent
  }, {
    path: 'sign-in',
    component: AuthComponent
  }, {
    path: 'sign-up',
    component: AuthComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'favorites',
    component: FeedListComponent
  }
];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ WelcomeComponent } from './welcome/welcome.component';
import{ FindComponent } from './find/find.component';
import { AddComponent } from './add/add.component';
// import { DetailComponent } from './detail/detail.component';
// import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
  
  // {
  //   path: 'geocaches/:id',
  //   component: DetailComponent
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

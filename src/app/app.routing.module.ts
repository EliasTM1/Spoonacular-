import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartStaticComponent } from './pages/start-static/start-static.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: StartStaticComponent,
  // },
  {
    // path: 'enroll',
    path: '',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

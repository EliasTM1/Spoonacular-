import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
// import { OptionSelectionComponent } from './components/option-selection/option-selection.component';
// import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
// import { ToggleSettingsComponent } from './components/toggle-settings/toggle-settings.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
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

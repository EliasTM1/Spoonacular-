import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { OptionSelectionComponent } from './components/option-selection/option-selection.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ToggleSettingsComponent } from './components/toggle-settings/toggle-settings.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'options',
    component: OptionSelectionComponent,
  },
  {
    path: 'settings',
    component: ProfileEditorComponent,
  },
  {
    path: 'toglleSettings',
    component: ToggleSettingsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

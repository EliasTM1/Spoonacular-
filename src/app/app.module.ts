import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { OptionSelectionComponent } from './components/option-selection/option-selection.component';
import { ToggleSettingsComponent } from './components/toggle-settings/toggle-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileEditorComponent,
    OptionSelectionComponent,
    ToggleSettingsComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

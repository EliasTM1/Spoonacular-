import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { OptionSelectionComponent } from './components/option-selection/option-selection.component';
import { ToggleSettingsComponent } from './components/toggle-settings/toggle-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileEditorComponent,
    OptionSelectionComponent,
    ToggleSettingsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

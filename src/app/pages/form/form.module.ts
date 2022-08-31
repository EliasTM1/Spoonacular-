import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form.routing';
import {formStateKey, reducer} from './state'

@NgModule({
  declarations:[FormComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(formStateKey, reducer)
  ],
  exports: [
    FormComponent
  ]
})

export class FormModule {}

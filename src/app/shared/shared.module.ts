import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { CardComponent } from './card/card.component';
import { LegendsComponent } from './legends/legends.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    LoadingComponent,
    CardComponent,
    LegendsComponent,
    CardDetailsComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    CardComponent,
    LegendsComponent
  ]
})
export class SharedModule { }

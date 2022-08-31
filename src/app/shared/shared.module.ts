import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { LegendsComponent } from './legends/legends.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { ErrorComponent } from './error/error.component';
import { CardIconsComponent } from './card-icons/card-icons.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { PillComponent } from './pill/pill.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoadingComponent,
    LegendsComponent,
    CardDetailsComponent,
    CardIconsComponent,
    ErrorComponent,
    CardDemoComponent,
    SearchScreenComponent,
    PillComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    LegendsComponent,
    CardDetailsComponent,
    ErrorComponent,
    CardIconsComponent,
    CardDemoComponent,
    SearchScreenComponent,
    PillComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent} from './dashboard.component'
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing';
import { HomeComponent } from '../home/home.component';
import { SearchRecipesComponent } from '../search-recipes/search-recipes.component';
import { SavedRecipesComponent } from '../saved-recipes/saved-recipes.component';
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component'


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SearchRecipesComponent,
    SavedRecipesComponent,
    AdvancedSearchComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

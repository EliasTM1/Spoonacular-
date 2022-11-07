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
import { SavedTableComponent } from '../saved-table/saved-table.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { homeStateKey, reducer } from '../home/state';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from '../home/state/home.effects';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SearchRecipesComponent,
    SavedRecipesComponent,
    AdvancedSearchComponent,
    SavedTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(homeStateKey, reducer),
    EffectsModule.forFeature([HomeEffects])
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }

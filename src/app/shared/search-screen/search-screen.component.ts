import { Component, Input, OnInit } from '@angular/core';
import { CuisineCategory, StaticCuisines,StaticCuisinesExclude, StaticMealTypes } from './constants';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css'],
})
export class SearchScreenComponent implements OnInit {
  constructor() {}

  public staticCuisines: CuisineCategory[] = StaticCuisines;
  public staticExcludeCuisines: CuisineCategory[] = StaticCuisinesExclude;
  public staticMealTypes: CuisineCategory[] = StaticMealTypes;

  ngOnInit(): void {}

  @Input() searchMode: string = '';
  public isSearchEmpty: boolean = true;

}

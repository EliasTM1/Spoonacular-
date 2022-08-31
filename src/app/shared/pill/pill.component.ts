import { Component, Input, OnInit } from '@angular/core';
import { CuisineCategory, StaticCuisines } from './constants';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css'],
})
export class PillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() staticCuisines: CuisineCategory[] = [];
  @Input() pillMode: string = '';

  public isPillActive: boolean = false;

  addCategory(addedCuisine: any) {
    addedCuisine.isActive = !addedCuisine.isActive;
    this.isPillActive = !this.isPillActive;
  }
}

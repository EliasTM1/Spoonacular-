import { Component, OnInit } from '@angular/core';
import {AvFormDisplayMode} from './constants'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //  ! FORM MODE
    this.formDisplayMode = this.generalDetails
    //  ! FORM MODE
  }

  public generalDetails : string = AvFormDisplayMode.generalDetails
  public priceBreakdownGraph : string = AvFormDisplayMode.priceBreakdownGraph
  public nutritionInfoGraph : string = AvFormDisplayMode.nutritionInfoGraph
  public formDisplayMode : string = ''



  setNutritionalForm() {
    this.formDisplayMode = this.generalDetails;
    console.warn("setNutritionalForm");
  }
  setPriceBreakdownForm() {
    this.formDisplayMode = this.priceBreakdownGraph;
    console.warn("setPriceBreakdownForm");

  }
  setGenDetailForm() {
    this.formDisplayMode = this.nutritionInfoGraph;
    console.warn("setGenDetailForm");
  }

  closeModal() {

  }

}

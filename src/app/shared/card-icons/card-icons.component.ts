import {  Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { CardIcons, UserModel } from 'src/app/interfaces/user.interface';
import {
  legendCategoriesIntercafe,
  lowSrc,
  lactoseSrc,
  glutenSrc,
  veganSrc,
  vegetarianSrc,
  healthySrc,
} from './constants';

@Component({
  selector: 'app-card-icons',
  templateUrl: './card-icons.component.html',
  styleUrls: ['./card-icons.component.css'],
})
export class CardIconsComponent implements  OnInit{
  // @Input() recipeFeatures!: CardIcons;
  @Input() recipeFeatures!: any;
  constructor() {}

  ngOnInit(): void {
    this.mapLikeIconsTwo();
  }

  public cheap!: boolean;
  public dairyFree!: boolean;
  public gluttenFree!: boolean;
  public vegan!: boolean;
  public vegetarian!: boolean;
  public healthy!: boolean;

  // public icon
  public groupedRecipeFeatures: legendCategoriesIntercafe[] = [];


  mapLikeIconsTwo() {
    this.groupedRecipeFeatures = [
      {
        isIconPresent: this.recipeFeatures.cheap,
        src: lowSrc,
      },
      {
        isIconPresent: this.recipeFeatures.dairyFree,
        src: lactoseSrc,
      },
      {
        isIconPresent: this.recipeFeatures.glutenFree,
        src: glutenSrc,
      },
      {
        isIconPresent: this.recipeFeatures.vegan,
        src: veganSrc,
      },
      {
        isIconPresent: this.recipeFeatures.vegetarian,
        src: vegetarianSrc,
      },
      {
        isIconPresent: this.recipeFeatures.veryHealthy,
        src: healthySrc,
      },
    ];

    console.warn(this.groupedRecipeFeatures, "afterMapped");

    this.groupedRecipeFeatures.filter((e) => {
      return e.isIconPresent != false;
    });
  }
}

export interface UserPrvt {
  age: number;
  height: number;
  heightU: String;
  intolerances: Intolerances;
  name: string;
  weight: number;
  weightUnits: string;
}

export interface Intolerances {
  dairy: string;
  egg: string;
  gluten: string;
  grain: string;
  peanut: string;
  seafood: string;
  sesame: string;
  shellfish: string;
  soy: string;
  sulfite: string;
  treeNut: string;
  wheat: string;
}

export interface UserModel {
cheap: boolean ;
cookTime: number ;
credits: string ;
creditsUrl: string ;
dairyFree: boolean ;
glutenFree: boolean ;
id: string ;
image: string ;
ingredients: string ;
prepTime: number ;
readyInMinutes: number ;
susteinable: boolean ;
title: string ;
vegan: boolean ;
vegetarian: boolean ;
veryHealthy: boolean ;
}

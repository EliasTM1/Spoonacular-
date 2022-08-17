export interface RadomRecipes {
  recipes: RandomRecipe[];
}

export interface RandomRecipe {
  aggregateLikes:           number;
  analyzedInstructions:     any[];
  cheap:                    boolean;
  cookingMinutes:           number;
  creditsText:              string;
  cuisines:                 any[];
  dairyFree:                boolean;
  diets:                    string[];
  dishTypes:                string[];
  extendedIngredients:      ExtendedIngredient[];
  gaps:                     string;
  glutenFree:               boolean;
  healthScore:              number;
  id:                       number;
  image:                    string;
  imageType:                string;
  instructions:             string;
  license:                  string;
  lowFodmap:                boolean;
  occasions:                string[];
  originalId:               null;
  preparationMinutes:       number;
  pricePerServing:          number;
  readyInMinutes:           number;
  servings:                 number;
  sourceName:               string;
  sourceUrl:                string;
  spoonacularSourceUrl:     string;
  summary:                  string;
  sustainable:              boolean;
  title:                    string;
  vegan:                    boolean;
  vegetarian:               boolean;
  veryHealthy:              boolean;
  veryPopular:              boolean;
  weightWatcherSmartPoints: number;
}

export interface ExtendedIngredient {
  id:           number;
  aisle:        string;
  image:        string;
  consistency:  string;
  name:         string;
  nameClean:    string;
  original:     string;
  originalName: string;
  amount:       number;
  unit:         string;
  meta:         string[];
  measures:     Measures;
}

export interface Measures {
  us:     Metric;
  metric: Metric;
}

export interface Metric {
  amount:    number;
  unitShort: string;
  unitLong:  string;
}

// ? Nutrition by ID
export interface NutritionById {
  calories: string;
  carbs: string;
  fat: string;
  protein: string;
  bad: Bad[];
  good: Bad[];
  expires: number;
  isStale: boolean;
}

export interface Bad {
  title: string;
  amount: string;
  indented: boolean;
  percentOfDailyNeeds: number;
}
// ? Nutrition by ID

// ? Equipment by ID
export interface EquipmentById {
  equipment: Equipment[];
}

export interface Equipment {
  name:  string;
  image: string;
}

// ? Equipment by ID

// ? Taste by ID
export interface TasteById {
  sweetness: number;
  saltiness: number;
  sourness: number;
  bitterness: number;
  savoriness: number;
  fattiness: number;
  spiciness: number;
}
// ? Taste by ID

// ? Price Breakdown by ID
export interface PriceBreakdownId {
  ingredients: IngredientPriceBreakdown[];
  totalCost: number;
  totalCostPerServing: number;
}

export interface IngredientPriceBreakdown {
  name: string;
  image: string;
  price: number;
  amount: Amount;
}

export interface Amount {
  metric: Metric;
  us: Metric;
}

export interface Metric {
  value: number;
  unit: string;
}
// ? Price Breakdown by ID

// ? Ingredients by ID
export interface IngredientsById {
  ingredients?: IngredientWidgetId[];
}

export interface IngredientWidgetId {
  name: string;
  image: string;
  amount: Amount;
}

export interface Amount {
  metric: Metric;
  us: Metric;
}

export interface Metric {
  value: number;
  unit: string;
}
// ? Ingredients by ID


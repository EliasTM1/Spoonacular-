export interface UserPrvt {
  name: string;
  age: number;
  weight: number;
  weightUnits: string;
  height: number;
  heightU: String;
  intolerances: Intolerances;
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

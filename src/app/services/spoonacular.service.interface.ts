import { Observable } from "rxjs";

export interface IRandomRecipes {
  requestRandom(): Observable<unknown>
}

import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Intolerances, UserPrvt } from '../../interfaces/user.interface';
import { MOCK_INTOLERANCES } from '../../mocks/intolerances';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { IngredientsService } from 'src/app/ingredients.service';
import { Ingredient } from 'src/app/interfaces/recipes.interfaces';
import { Store } from '@ngrx/store';
import { FormPageActions } from 'src/app/ngrx';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientsService,
    private store: Store,

  ) {}

  //  * FORM STEPS
  currentStep: string[] = [];
  startEnrollmentStep: string = 'start';
  confirmInfoStep: string = 'confirmInfoStep';
  userIntoleranceStep: string = 'userIntoleranceStep';
  addLikes: string = 'addLikes';
  // * USER INSTANCE
  userName: string | null = '';
  userAge: string | null = '';
  userWeight: string | null = '';
  userWeightUnit: string | null = '';
  userHeight: string | null = '';
  userHeightUnit: string | null = '';
  userIntoleranceList: number[] = [];
  staticIngredients: Ingredient[] = [];
  MOCK_INTOLERANCES = MOCK_INTOLERANCES;
  selectedIndex!: number;
  activeIndex!: number;
  // * SUGGESTIONS
  currentSuggestions: Ingredient[] = [];
  matches: any[] = [];
  userLikes: any = [];
  userDislikes: any = [];

  personalForm = this.fb.group({
    //  ? Peronsal
    firstName: new FormControl('', Validators.required),
    age: new FormControl(''),
    weigth: new FormControl(''),
    weightUnit: new FormControl(''),
    height: new FormControl(''),
    heightUnit: new FormControl(''),
    userIntolerances: new FormControl(''),
    settings: this.fb.array([
      new FormGroup({
        isIntolerant: new FormControl([]),
      }),
    ]),
  });

  ngOnInit(): void {
    this.store.dispatch(FormPageActions.init());
    this.currentStep.push(this.startEnrollmentStep);
    // this.personalForm.valueChanges.forEach((value) => {});
    this.personalForm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((terms) => {
        terms;
      })
    );
    // this.currentSuggestions = this.ingredientService.getIngredients();
  }

  addPreference() {}
  //  * FORM STEPS
  previousStep() {
    this.currentStep.shift();
  }

  submitPersonal(e: any) {
    e.preventDefault();
    this.mapUserData();
    this.currentStep.unshift(this.confirmInfoStep);
  }

  enrollomentAllergens() {
    this.currentStep.unshift(this.userIntoleranceStep);
  }

  addUserLikes() {
    this.currentStep.unshift(this.addLikes);
  }

  goToDashboard() {
    this.currentStep.unshift(this.addLikes);
  }

  addPreferences() {
    // this.currentStep = this.addLikes;
  }

  //  * ENDS FORM STEPS

  getUsrSettings(e: any) {
    this.personalForm.controls['settings'];
  }

  mapUserData() {
    this.userName = this.personalForm.controls.firstName.value;
    this.userAge = this.personalForm.controls.age.value;
    this.userWeight = this.personalForm.controls.weigth.value;
    this.userWeightUnit = this.personalForm.controls.weightUnit.value;
    this.userHeight = this.personalForm.controls.height.value;
    this.userHeightUnit = this.personalForm.controls.heightUnit.value;
  }

  changeStatus(index: any) {
    this.MOCK_INTOLERANCES = this.MOCK_INTOLERANCES.map((item, itemIndex) => {
      if (index === itemIndex) {
        item.elemClasses = 'active';
        this.MOCK_INTOLERANCES[itemIndex].elemClasses = 'active';
      } else {
        item.elemClasses = '';
      }
      return item;
    });
  }

  setActiveIndex(index: any) {
    const mynumero = Number(index);
    this.userIntoleranceList.push(mynumero);
    this.activeIndex = index;
  }

  getActiveClass(i: any) {
    return this.activeIndex == i ? 'active' : '';
  }
  //  ? Returns meaning object is not present
  isObjPresent(currentIteration: Ingredient): boolean {
    let result: boolean = false;
    this.matches.some((element: Ingredient) => {
      result =
        element.ingredient === currentIteration.ingredient ? true : false;
    });
    return result;
  }

  searchOnKeyUp(event: any) {
    let boxText = event.target.value;
    let charCode = event.which;
    let searchBoxState = event.target.value;
    let regex = new RegExp('\\b(' + searchBoxState + ')\\b');
    if (boxText.length === 1) this.matches = [];
    if (event.which === 8) this.matches = [];
    if (!this.isCharValid(charCode)) return;
    if (searchBoxState.length > 2) {
      for (let i = 0; i < this.currentSuggestions.length; i++) {
        const { ingredient } = this.currentSuggestions[i];
        if ( ingredient.match(regex) && !this.isObjPresent(this.currentSuggestions[i])) {
          this.matches.push(this.currentSuggestions[i]);
        }
      }
    }
    let temporal = this.matches.filter((e: any) => e != null);
  }

  addLike(e: Ingredient) {
    let newLike = {
      ingrediente: "",
    }
    this.userLikes.push(e.ingredient);
  }

  addDislike(e: Ingredient) {
    this.userDislikes.push(e.ingredient);
  }

  isCharValid(charCode: number) {
    let valid!: boolean;
    valid = charCode >= 65 && charCode <= 90 ? true : false;
    return valid;
  }

  clickedSuggestion(suggestionSelected: any) {
  }
}

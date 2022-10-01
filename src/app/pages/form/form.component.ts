import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MOCK_INTOLERANCES } from '../../mocks/intolerances';
import { debounceTime, distinctUntilChanged, first, map } from 'rxjs/operators';
import { IngredientsService } from 'src/app/ingredients.service';
import { Ingredient } from 'src/app/interfaces/api/recipesApi.interfaces';
import {  Store } from '@ngrx/store';
import { FormSelectors, FormStepActions } from './state/index';
import { UserPrvt } from './state/form.reducer';
import { Observable } from 'rxjs';
import {AvailFormSteps} from './constants'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // * USER INSTANCE
  currentStep$: Observable<string> = this.store.select(FormSelectors.currentStep);
  userName$: Observable<string> = this.store.select(FormSelectors.name);
  userAge$: Observable<number> = this.store.select(FormSelectors.age);
  userWeight$: Observable<number> = this.store.select(FormSelectors.weight);
  userWeightUnit$: Observable<string> = this.store.select(FormSelectors.weightUnits);
  userHeight$: Observable<number> = this.store.select(FormSelectors.height);
  userHeightUnit$: Observable<string> = this.store.select(FormSelectors.heightU);
  userIntolerances$: Observable<string[]> = this.store.select(FormSelectors.intolerances);
  userIntoleranceList: number[] = [];

  MOCK_INTOLERANCES = MOCK_INTOLERANCES;
  availableSteps = AvailFormSteps;
  staticIngredients: Ingredient[] = [];
  selectedIndex!: number;
  activeIndex!: number;
  stepTemplate : any
  // * SUGGESTIONS
  currentSuggestions: Ingredient[] = [];
  matches: any[] = [];
  userLikes: any = [];
  userDislikes: any = [];
  testUsrNgrx!: UserPrvt;

  // * With store state

  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientsService,
    private store: Store
  ) {}

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
    console.warn(this.stepTemplate)
    this.store.dispatch(FormStepActions.enter());
    this.store.dispatch(
      FormStepActions.changeFormStep({ step: this.availableSteps.startEnrollmentStep })
    );
    this.personalForm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((terms) => {
        terms;
      })
    );
  }

  addPreference() {}
  //  * FORM STEPS
  previousStep() {
    // this.currentStep.shift();
  }

  submitPersonal(e: any) {
    e.preventDefault();
    this.store.dispatch(
      FormStepActions.changeFormStep({ step: this.availableSteps.confirmInfoStep })
    );
    let user = this.mapUserData();
    this.store.dispatch(FormStepActions.submitPersonal({ userInfo: user }));
  }

  enrollomentAllergens() {
    this.store.dispatch(
      FormStepActions.confirmPersonal({ confirmedAction: true })
    );
    this.store.dispatch(
      FormStepActions.changeFormStep({ step: this.availableSteps.userIntoleranceStep })
    );

  }

  addUserLikes() {
    this.store.dispatch(
      FormStepActions.changeFormStep({ step: this.availableSteps.addLikes })
    );
  }

  goToDashboard() {
    // this.currentStep.unshift(this.addLikes);
  }

  addPreferences() {
    // this.currentStep = this.addLikes;
  }

  addUserIntolerances() {
    // this.store.dispatch(FormStepActions.addIntolerances({intolerance: this.userIntolerance }))
  }

  //  * ENDS FORM STEPS

  getUsrSettings(e: any) {
    this.personalForm.controls['settings'];
  }

  mapUserData() {
    return {
      age: Number(this.personalForm.controls.age.value),
      personalConfimerd: false,
      height: Number(this.personalForm.controls.height.value),
      heightU: this.personalForm.controls.heightUnit.value!,
      name: this.personalForm.controls.firstName.value!,
      enrollStarted: true,
      enrollFinished: false,
      weight: Number(this.personalForm.controls.weigth.value),
      weightUnits: this.personalForm.controls.weightUnit.value!,
      usrIntolerances: [],
      completeEnrollSteps: '',
    };
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

  addSelectionClass(index: number) {
    console.log(this.userIntoleranceList);
    if (this.userIntoleranceList.includes(index))
      this.userIntoleranceList = this.userIntoleranceList.filter(
        (e) => e !== index
      );
    console.log(this.userIntoleranceList, 'AFTER');
  }

  setActiveIndex(index: any, intolerance: string) {
    const mynumero = Number(index);
    let intoleranceKey = intolerance
      .toLowerCase()
      .replace('-', '')
      .replace(/\s/g, '');
    if (!this.userIntoleranceList.includes(mynumero)) {
      this.userIntoleranceList.push(mynumero);
    } else {
      this.userIntoleranceList = this.userIntoleranceList.filter(
        (numero) => numero !== mynumero
      );
    }
    this.activeIndex = index;
    let intoleranceArray = [];
    intoleranceArray.push(intoleranceKey);
    this.store.dispatch(
      FormStepActions.addIntolerances({ intolerance: intoleranceKey })
    );
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
        if (
          ingredient.match(regex) &&
          !this.isObjPresent(this.currentSuggestions[i])
        ) {
          this.matches.push(this.currentSuggestions[i]);
        }
      }
    }
    let temporal = this.matches.filter((e: any) => e != null);
  }

  addLike(e: Ingredient) {
    let newLike = {
      ingrediente: '',
    };
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

  clickedSuggestion(suggestionSelected: any) {}
}

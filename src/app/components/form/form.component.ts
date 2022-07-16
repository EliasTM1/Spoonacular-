import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { sample } from 'rxjs';
import { Intolerances, UserPrvt } from '../../../interfaces/user.interface';
import { MOCK_INTOLERANCES } from '../../mocks/intolerances';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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

  MOCK_INTOLERANCES = MOCK_INTOLERANCES;
  selectedIndex!: number;
  activeIndex!: number;

  // ? Form Group
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
    this.currentStep.push(this.startEnrollmentStep);

    // this.personalForm.valueChanges.forEach((value) => {});
    this.personalForm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((terms) => {
        terms;
      })
    );
  }

  //  * FORM STEPS
  previousStep() {
    console.log('this.currentStep');
    console.log(this.currentStep);
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

  addPreferences() {
    // this.currentStep = this.addLikes;
  }

  //  * ENDS FORM STEPS

  getUsrSettings(e: any) {
    console.log({ PARAMS: e });
    this.personalForm.controls['settings'];
    console.log({
      settings: this.personalForm.controls['settings'],
    });
  }

  mapUserData() {
    this.userName= this.personalForm.controls.firstName.value
    this.userAge = this.personalForm.controls.age.value
    this.userWeight = this.personalForm.controls.weigth.value
    this.userWeightUnit = this.personalForm.controls.weightUnit.value
    this.userHeight = this.personalForm.controls.height.value
    this.userHeightUnit = this.personalForm.controls.heightUnit.value

    console.log(this.userName);

    console.warn(this.userName, 'from mapUserData');
    console.warn(this.userAge, 'from mapUserData');
    console.warn(this.userWeight, 'from mapUserData');
    console.warn(this.userWeightUnit, 'from mapUserData');
    console.warn(this.userHeight, 'from mapUserData');
    console.warn(this.userHeightUnit, 'from mapUserData');
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
}

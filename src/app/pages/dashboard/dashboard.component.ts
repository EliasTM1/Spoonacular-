import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {SpoonacularService} from '../../services/spoonacular.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoading: boolean = false;
  constructor(
 private spoonService : SpoonacularService
  ) { }

  ngOnInit(): void {


  }
  mainUrl : string = "https://api.spoonacular.com/recipes/";

}

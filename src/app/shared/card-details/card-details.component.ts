import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  constructor() { }

  @Input() recipeImage : string = '';
  @Input() recipeSummary : string = '';


  ngOnInit(): void {
  }

}

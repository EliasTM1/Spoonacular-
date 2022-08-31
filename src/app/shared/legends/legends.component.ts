import { Component, OnInit } from '@angular/core';
import { legendCategories, legendsCtgIcons } from './constants';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css'],
})

export class LegendsComponent implements OnInit {
  public legendCategories! : legendCategories[];

  constructor() {}

  ngOnInit(): void {
    this.legendCategories = legendsCtgIcons
  }
}

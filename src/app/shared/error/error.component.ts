import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {


  @Input() inputMsg : string = '';
  @Input() secondaryMsg? : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

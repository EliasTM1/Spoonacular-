import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  showSidebar : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSideBar() {
    this.showSidebar = !this.showSidebar;
  }


}

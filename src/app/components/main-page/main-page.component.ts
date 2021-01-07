import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("window history -> ",window.history.state);
  }

  onActivate(event:any){
    console.log("MainPageComponent -> onActivate",event);
  }

  onDeactivate(event:any){
    console.log("MainPageComponent -> onDeactivate",event);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("window history -> ",window.history.state);
  }

  onActivate(event:any){
    console.log("Game1Component -> onActivate",event);
  }

  onDeactivate(event:any){
    console.log("Game1Component -> onDeactivate",event);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("window history -> ",window.history.state);
  }

  onActivate(event:any){
    console.log("Game2Component -> onActivate",event);
  }

  onDeactivate(event:any){
    console.log("Game2Component -> onDeactivate",event);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class GameComponent implements OnInit {

  gameId:any;

  constructor(public router: ActivatedRoute) {
    this.router.params.subscribe(
      (params:Params)=>{this.gameId=params['id'];}
    );
  }

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

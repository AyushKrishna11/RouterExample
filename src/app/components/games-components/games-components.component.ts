import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-games-components',
  templateUrl: './games-components.component.html',
  styleUrls: ['./games-components.component.scss']
})
export class GamesListComponent implements OnInit {

  showGamesMenu:boolean=true;

  ngOnInit() {
    // console.log("window history -> ",window.history.state);
  }

  hideGamesMenu(){
    this.showGamesMenu=false;
  }

  onActivate(event:any){
    // console.log("GamesComponent -> onActivate",event);
  }

  onDeactivate(event:any){
    console.log("GamesComponent -> onDeactivate",event);
    this.showGamesMenu=true;
  }

}

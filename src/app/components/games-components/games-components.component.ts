import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-components',
  templateUrl: './games-components.component.html',
  styleUrls: ['./games-components.component.scss']
})
export class GamesComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  some(){
    console.log("asd");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle-component',
  templateUrl: './puzzle-component.component.html',
  styleUrls: ['./puzzle-component.component.scss']
})
export class PuzzleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("window history -> ",window.history.state);
  }

}

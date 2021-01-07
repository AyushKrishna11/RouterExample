import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.scss']
})
export class QuizComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("window history -> ",window.history.state);
  }

}

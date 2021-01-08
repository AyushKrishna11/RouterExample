import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './components/games-components/games-components.component';
import { GameComponent } from './components/game1/game1.component';
import { PuzzleComponentComponent } from './components/puzzle-component/puzzle-component.component';
import { QuizComponentComponent } from './components/quiz-component/quiz-component.component';
import { PuzzleaddComponent } from './components/puzzleadd/puzzleadd.component';
import { PuzzlechartsComponent } from './components/puzzlecharts/puzzlecharts.component';
import { QuizaddComponent } from './components/quizadd/quizadd.component';
import { QuizchartsComponent } from './components/quizcharts/quizcharts.component';

// const routes: Routes = [];

const myroutes:Routes=[
  {path:"games",component:GamesListComponent, children:[
    {path:":id",component:GameComponent}, 
  ]},
  {path:"puzzle",component:PuzzleComponentComponent, children:[
    {path:"puzzleadd",component:PuzzleaddComponent},
    {path:"puzzlechart",component:PuzzlechartsComponent}
  ]},
  {path:"quiz",component:QuizComponentComponent, children:[
    {path:"quizadd",component:QuizaddComponent},
    {path:"quizchart",component:QuizchartsComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponentsComponent } from './components/games-components/games-components.component';
import { Game1Component } from './components/game1/game1.component';
import { Game2Component } from './components/game2/game2.component';
import { PuzzleComponentComponent } from './components/puzzle-component/puzzle-component.component';
import { QuizComponentComponent } from './components/quiz-component/quiz-component.component';

// const routes: Routes = [];

const myroutes:Routes=[
  {path:"games",component:GamesComponentsComponent, children:[
    {path:"game1",component:Game1Component}, 
    {path:"game2",component:Game2Component}
  ]},
  {path:"puzzle",component:PuzzleComponentComponent},
  {path:"quiz",component:QuizComponentComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

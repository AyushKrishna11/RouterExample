import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GamesListComponent } from './components/games-components/games-components.component';
import { PuzzleComponentComponent } from './components/puzzle-component/puzzle-component.component';
import { QuizComponentComponent } from './components/quiz-component/quiz-component.component';
import { GameComponent } from './components/game1/game1.component';
import { PuzzleaddComponent } from './components/puzzleadd/puzzleadd.component';
import { PuzzlechartsComponent } from './components/puzzlecharts/puzzlecharts.component';
import { QuizaddComponent } from './components/quizadd/quizadd.component';
import { QuizchartsComponent } from './components/quizcharts/quizcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamesListComponent,
    PuzzleComponentComponent,
    QuizComponentComponent,
    GameComponent,
    PuzzleaddComponent,
    PuzzlechartsComponent,
    QuizaddComponent,
    QuizchartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

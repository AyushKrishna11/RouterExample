import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GamesComponentsComponent } from './components/games-components/games-components.component';
import { PuzzleComponentComponent } from './components/puzzle-component/puzzle-component.component';
import { QuizComponentComponent } from './components/quiz-component/quiz-component.component';
import { Game1Component } from './components/game1/game1.component';
import { Game2Component } from './components/game2/game2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamesComponentsComponent,
    PuzzleComponentComponent,
    QuizComponentComponent,
    Game1Component,
    Game2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

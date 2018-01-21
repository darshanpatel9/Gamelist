import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamelistService } from './gamelist.service';
import { HttpClientModule } from '@angular/common/http';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'detail/:i', component: GameDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameSearchComponent,
    GameDetailComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GamelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

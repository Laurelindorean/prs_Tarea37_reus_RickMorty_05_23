import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

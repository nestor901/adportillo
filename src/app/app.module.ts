import { FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/about/about.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';

/* componentes agregados*/
import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperiencesComponent,
    PortfolioComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

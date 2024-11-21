import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { GridProjectsComponent } from './components/grid-projects/grid-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    GridProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

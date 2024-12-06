import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { GridProjectsComponent } from './components/grid-projects/grid-projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    GridProjectsComponent,
    AboutMeComponent,
    ScrollRevealDirective,
    TechStackComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { BackgroundComponent } from './component/background/background.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';
import { ConsoleComponent } from './component/console/console.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {FormsModule} from '@angular/forms';
import {NgImageFullscreenViewModule} from 'ng-image-fullscreen-view';
import { FullScreenViewComponent } from './component/projects/full-screen-view/full-screen-view.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BackgroundComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ConsoleComponent,
    FullScreenViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    NgImageFullscreenViewModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



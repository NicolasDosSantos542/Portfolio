import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  link ={
  isHomeActive : true,
  isAboutActive : false,
  isBackgroundActive : false,
  isSkillActive : false,
  isProjectsActive : false,
  isContactActive : false
  }

  chooseDisplayed(element){
    // Object.entries(this.link).forEach((element) => this.link = )
    Object.keys(this.link).forEach(val => {
      this.link[val] = false
    });
    switch(element){
      case 'home':
        this.link.isHomeActive =true;
        break;
      case 'about':
        this.link.isAboutActive =true;
        break;
      case 'background':
        this.link.isBackgroundActive =true;
        break;
      case 'skills':
        this.link.isSkillActive =true;
        break;
      case 'projects':
        this.link.isProjectsActive =true;
        break;
      case 'contact':
        this.link.isContactActive =true;
        break;

    }


  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  link = {
    isHomeActive: true,
    isBackgroundActive: false,
    isSkillActive: false,
    isProjectsActive: false,
    isContactActive: false
  };
  tab = {
    isHomeActive: true,
    isBackgroundActive: false,
    isSkillActive: false,
    isProjectsActive: false,
    isContactActive: false
  };
  toggler = false;

  // tslint:disable-next-line:typedef
  chooseDisplayed(element) {
    // Object.entries(this.link).forEach((element) => this.link = )
    Object.keys(this.link).forEach(val => {
      this.link[val] = false;
    });
    switch (element) {
      case 'home':
        this.link.isHomeActive = true;
        this.tab.isHomeActive = true;
        break;
      case 'background':
        this.link.isBackgroundActive = true;
        this.tab.isBackgroundActive = true;
        break;
      case 'skills':
        this.link.isSkillActive = true;
        this.tab.isSkillActive = true;
        break;
      case 'projects':
        this.link.isProjectsActive = true;
        this.tab.isProjectsActive = true;
        break;
      case 'contact':
        this.link.isContactActive = true;
        this.tab.isContactActive = true;
        break;
    }
  }

  // tslint:disable-next-line:typedef
  displayMenu($event) {
    console.log($event.target.id);
    if (!this.toggler && $event.target.id === 'toggler') {
      this.toggler = true;
      document.getElementById('menu').style.display = 'block';
    } else if (this.toggler ){
      this.toggler = false;
      document.getElementById('menu').style.display = 'none';
    }

  }

  // tslint:disable-next-line:typedef
  closeTab(element) {
    switch (element) {
      case 'home':
        this.link.isHomeActive = false;
        this.tab.isHomeActive = false;
        break;

      case 'background':
        this.link.isBackgroundActive = false;
        this.tab.isBackgroundActive = false;
        break;
      case 'skills':
        this.link.isSkillActive = false;
        this.tab.isSkillActive = false;
        break;
      case 'projects':
        this.link.isProjectsActive = false;
        this.tab.isProjectsActive = false;
        break;
      case 'contact':
        this.link.isContactActive = false;
        this.tab.isContactActive = false;
        break;
    }
  }
}

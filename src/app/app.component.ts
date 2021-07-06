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
  consoleHeight = 20;

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
    if (!this.toggler && $event.target.id === 'toggler') {
      this.toggler = true;
      document.getElementById('menu').style.display = 'block';
    } else if (this.toggler) {
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

  // tslint:disable-next-line:typedef
  moveConsole($event) {
    if ($event.target.id === 'up-arrow' && this.consoleHeight !== 100) {
      this.consoleHeight += 20;
    }
    if ($event.target.id === 'down-arrow' && this.consoleHeight !== 20) {
      this.consoleHeight -= 20;
    } else if ($event.target.id === 'down-arrow' && this.consoleHeight === 20) {
      this.consoleHeight = 5;
    }
    if ($event.target.id === 'line') {
      this.consoleHeight = 5;
    }
    document.getElementById('console').style.height = this.consoleHeight + 'vh';
  }

  onDragStart($event) {
    console.log(`starting`, $event);
    // Hide dragged element

    document.getElementById('console').style.height = $event.clientY + 'px';
  }
onDrop($event){
  console.log('ondrop', $event.clientX, $event.clientY);
}
  onDragEnd($event) {
    console.log('drag end', $event);
    // Show dragged element again
    console.log($event.clientX);
    document.getElementById('console').style.height = $event.clientY + 'px';

  }
}

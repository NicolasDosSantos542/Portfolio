import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  value = '';
  // str = '';
  isHelp = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  commandTerminal(value) {
    let cmd = value;
    if (value.includes(' ')) {
      cmd = value.substr(0, value.indexOf(' '));
    }
    switch (cmd) {
      case 'help':
        this.isHelp = true;
        break;
      case 'ls':
        this.displayComponents();
        break;
      case 'getCV':
        this.getCV();
        break;
      case 'recruit':
        this. recruit();
        break;
      case 'git':
        this.displayGit();
        break;
    }
  }

  private displayComponents() {

  }

  private getCV() {

  }

  private recruit() {

  }

  private displayGit() {

  }
}
